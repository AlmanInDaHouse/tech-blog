import { pgTable, serial, text, varchar, timestamp, boolean, integer, jsonb, pgEnum, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const roleEnum = pgEnum('role', ['admin', 'user']);
export const postStatusEnum = pgEnum('post_status', ['draft', 'published', 'archived']);
export const eventTypeEnum = pgEnum('event_type', ['view', 'login', 'publish', 'click', 'error', 'system']);

// Users
export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	username: varchar('username', { length: 50 }).notNull().unique(),
	email: varchar('email', { length: 255 }).notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	role: roleEnum('role').default('user').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// Categories / Sections
export const categories = pgTable('categories', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 100 }).notNull(),
	slug: varchar('slug', { length: 100 }).notNull().unique(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// Media / Images
export const media = pgTable('media', {
	id: serial('id').primaryKey(),
	filename: varchar('filename', { length: 255 }).notNull(),
	url: text('url').notNull(),
	mimeType: varchar('mime_type', { length: 50 }),
	altText: text('alt_text'),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// Posts
export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	title: varchar('title', { length: 255 }).notNull(),
	slug: varchar('slug', { length: 255 }).notNull().unique(),
	content: text('content'), // Could be Markdown or HTML
	excerpt: text('excerpt'),
	status: postStatusEnum('status').default('draft').notNull(),
	authorId: integer('author_id').references(() => users.id).notNull(),
	categoryId: integer('category_id').references(() => categories.id),
	featuredImageId: integer('featured_image_id').references(() => media.id),
	publishedAt: timestamp('published_at'),
	estimatedReadTime: integer('estimated_read_time'), // in minutes
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// Post Relations (Related Content) - Many-to-Many self reference
export const postRelations = pgTable('post_relations', {
	postId: integer('post_id').references(() => posts.id).notNull(),
	relatedPostId: integer('related_post_id').references(() => posts.id).notNull(),
}, (t) => [
    primaryKey({ columns: [t.postId, t.relatedPostId] }),
]);

// Allowed IPs (Whitelist)
export const allowedIps = pgTable('allowed_ips', {
	id: serial('id').primaryKey(),
	ipAddress: varchar('ip_address', { length: 45 }).notNull().unique(), // IPv6 support
	label: varchar('label', { length: 100 }),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// Events (Observability & ML)
export const events = pgTable('events', {
	id: serial('id').primaryKey(),
	type: eventTypeEnum('type').notNull(),
	sessionId: varchar('session_id', { length: 255 }), // For anonymous users
	userId: integer('user_id').references(() => users.id),
	resourceId: integer('resource_id'), // Generic ID (e.g. post_id)
    resourceType: varchar('resource_type', { length: 50 }), // 'post', 'category', etc.
	payload: jsonb('payload'), // Extensible metadata
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
    events: many(events)
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
	author: one(users, {
		fields: [posts.authorId],
		references: [users.id],
	}),
	category: one(categories, {
		fields: [posts.categoryId],
		references: [categories.id],
	}),
	featuredImage: one(media, {
		fields: [posts.featuredImageId],
		references: [media.id],
	}),
    // This defines the relationship to the join table
    relatedTo: many(postRelations, { relationName: 'related_to' }),
    relatedFrom: many(postRelations, { relationName: 'related_from' }),
}));

export const postRelationsRelations = relations(postRelations, ({ one }) => ({
    post: one(posts, {
        fields: [postRelations.postId],
        references: [posts.id],
        relationName: 'related_to'
    }),
    relatedPost: one(posts, {
        fields: [postRelations.relatedPostId],
        references: [posts.id],
        relationName: 'related_from'
    }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
	posts: many(posts),
}));
