export interface Author {
    name: string;
    avatar: string;
}

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content?: string; // Markdown content
    image: string;
    author: Author;
    date: string; // YYYY-MM-DD
    readTime: string; // e.g., "8 min read"
    category: string;
    tags: string[];
    views: number;
    featured?: boolean;
}

export interface Category {
    id: string;
    name: string;
    slug: string; // unique identifier for filtering
}
