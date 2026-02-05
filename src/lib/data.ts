import type { Post, Category } from './types';

export const categories: Category[] = [
    { id: '1', name: 'AI in Cybersecurity', slug: 'ai-security' },
    { id: '2', name: 'Software Development', slug: 'software-dev' },
    { id: '3', name: 'Innovative Tech', slug: 'innovative-tech' },
    { id: '4', name: 'Featured Projects', slug: 'featured' },
];

const authors = {
    alex: {
        name: "Alex Chen",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIip_OZ62KMTYQRixivR7rwdu4Q21rG7RPW7Pzaqyb34MbEdQaqeYNpT5VZkilDwdsR5aY2hZwyAAPcHV8c3RZ7keQdJ59U38be3rbdicBntTOUGuAQTNU3yTa5MZMbGXvSDXGlZGThqL526JU4A35wWvrXAOQufNEwm_RNtm567CF4Zkq0_2f5btGjBAl_uuzazzHcnd93EsKF3Un0OP7yZIaCNQEXnSYeisCmxYntl7Y61IgaPr7SWBCFEI_t5KaQUsF6BusIs"
    },
    default: {
        name: "TechBlog Team",
        avatar: "https://ui-avatars.com/api/?name=Tech+Blog&background=random"
    }
};

export const posts: Post[] = [
    {
        id: '1',
        title: "Securing Rust Applications: A Comprehensive Guide",
        excerpt: "A deep dive into memory safety, concurrency patterns, and how to build robust backend systems that scale securely using Rust's ownership model.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFpGAIIOugQ8OlfwNq5Nm9PZlaoJo8-L3626cQE7o3YkFxq4Dln2sf9QIa6cxccTGKyHux5SSc9DRONKONK3-myOV4PX4ktP-RYcOKz_wvh5eB2H2fb5GqyhT4zu2fCnBMfEKKEtF6BZtwHycTGp-xQImfS4iKBLHZo-MB2L9htyFMWs_Nk3nBCrwV4RY_XGnpEr1nhfn5qNOPP-4sBlnlcPYyv3ciBL0Ssk0haxVgwZW2rt1VKbktc5XZ1uWwOoXjbO1Hd722Fgg",
        author: authors.alex,
        date: "2023-10-24",
        readTime: "8 min read",
        category: "Software Development",
        tags: ["Rust", "Security", "Backend"],
        views: 12500,
        featured: true
    },
    {
        id: '2',
        title: "Generative AI: The New Frontier in Threat Detection",
        excerpt: "How machine learning models are evolving to predict zero-day vulnerabilities before they can be exploited by attackers.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB44OxZ4nWBJAumsCSH_lTGTv9o-u_uzApY8VVfUnKI33BId_CQoiLXEocza1kpvziK1vT0pydL0y_98mQPBv3186yhi5oZd7XCdqLS49yMegLxGUqeaHbzbU-UiR_4hGQv0_dlAtrkCt2k-gb8h0PIIIPqtr8zEziaNGNK7oLmAbZdXKoyUXBu9aRSTG8gUM_GpCMQRnA-rmXcvOaJOAnGPI7OrP4Q9uQPIO4euqb29apV92W7qqMby_PZiU2l3-cY0lNJh-z1vI",
        author: authors.default,
        date: "2023-11-02",
        readTime: "5 min read",
        category: "AI in Cybersecurity",
        tags: ["AI", "Security", "ML"],
        views: 8900
    },
    {
        id: '3',
        title: "Why SvelteKit is Changing the Game for JAMstack",
        excerpt: "Comparing the performance metrics of SvelteKit against traditional React frameworks in 2024 web development.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIRvwRgdy_0UVgIyeYTRc1Qw-K169J4V4oosnLk6d7wHuxpQxofH6On4heZFVAAb118sr_zeJ4OGfxmFwCrKSRTVNAqXmcWCSjETKe5d8LrivHJMZ5omM6xGtmw2ShB3wwctLmkbZdYhiolcsFcoIdnhB7wflGVFRRg750Z9xUhSqXoMDlfJZTDkCIu2wor0dFG0SJbYiBANd0YQ_tpcf8Zr6tWbm1W0Hz4WnExuS9cJYR7QtGuhzVonc0zp30t_f2lcd7FbXwUpM",
        author: authors.default,
        date: "2023-10-28",
        readTime: "6 min read",
        category: "Innovative Tech",
        tags: ["SvelteKit", "Frontend", "WebDev"],
        views: 10200
    },
    {
        id: '4',
        title: "Project Spotlight: Open Source IoT Dashboard",
        excerpt: "We built a real-time IoT monitoring dashboard using Rust for the backend and WebSockets for live data streaming.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiHcqX2LGzIkc7rFg_FkLXnj71RxveU-JvAgbUIs0D0udi_ePVnrpFE_iUV727ephysEmMkeDfYnFxRHtfpUlseKPHTKCWb37CNW0kshyFNHw8iqfGoh-2Jj6FuRjOQ0LwEUckpk9IWSRgRMqv5a3WfgZDYvihGJ52jgqmbi37EgJOgb4_tEknxcW9InmI4pMKEMBT1FS_jUuNBaHPQjj0fWQJljOYKjAJabLWvauWuSLsj6LQAJRtS9KgiopZtz8w5yJJkJM0b8A",
        author: authors.default,
        date: "2023-10-15",
        readTime: "12 min read",
        category: "Featured Projects",
        tags: ["IoT", "Rust", "WebSockets"],
        views: 5600
    },
    {
        id: '5',
        title: "Understanding Adversarial Machine Learning",
        excerpt: "An introduction to how attackers can fool AI systems and what developers can do to harden their models.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlfrOKz6s2JM-w8IWKLW7m7E_luhuQlhUBs00kpv-147lI9mFUKVS28XGXYtEepJs0ErISsukP334b9Y87WLOGUwRjgIwbEtusVUGghPgOC1Jg13lGjSeN6oF-ZKjREIhPgWHVsQgYCJAbqpYXGIksVc9IBUSPZHzlUvfUBs4I43zaQd9oI-EV5OLvg0r2DTj8rPc0qENViidQxXfPQyg_qaaqlgjkn9TCoD9v-szxw-PD304wgi9hvW68hkittnJhOu_-jPmOqUk",
        author: authors.default,
        date: "2023-09-30",
        readTime: "9 min read",
        category: "AI in Cybersecurity",
        tags: ["AI", "Security"],
        views: 7800
    },
    // Adding a few more for pagination testing
    {
        id: '6',
        title: "Building a Custom Admin Panel with SvelteKit",
        excerpt: "Learn how to create a secure, responsive admin dashboard using SvelteKit's latest features.",
        image: "https://placehold.co/600x400/1e293b/ffffff?text=Svelte+Admin",
        author: authors.default,
        date: "2023-09-25",
        readTime: "7 min read",
        category: "Software Development",
        tags: ["SvelteKit", "Admin"],
        views: 5200
    },
     {
        id: '7',
        title: "Optimizing Rust Structs for Memory Usage",
        excerpt: "Tips and tricks for reducing memory footprint in high-performance Rust applications.",
        image: "https://placehold.co/600x400/e36002/ffffff?text=Rust+Memory",
        author: authors.default,
        date: "2023-09-20",
        readTime: "10 min read",
        category: "Software Development",
        tags: ["Rust", "Optimization"],
        views: 4100
    },
    {
        id: '8',
        title: "Zero Trust Architecture for Web Apps",
        excerpt: "Implementing Zero Trust principles in modern web application architecture.",
        image: "https://placehold.co/600x400/1e40af/ffffff?text=Zero+Trust",
        author: authors.default,
        date: "2023-09-15",
        readTime: "8 min read",
        category: "AI in Cybersecurity",
        tags: ["Security", "Architecture"],
        views: 3800
    }
];

export const trendingTopics = [
    "#RustLang", "#SvelteKit", "#WebAssembly", "#GraphQL", "#CyberSec", "#DevOps"
];

// Helper functions to simulate API calls
export async function getPosts(
    categorySlug?: string | null,
    sortBy: 'newest' | 'oldest' | 'popular' = 'newest',
    page: number = 1,
    limit: number = 6
): Promise<{ posts: Post[], total: number }> {

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let filtered = [...posts];

    if (categorySlug) {
        // Find category name from slug
        const category = categories.find(c => c.slug === categorySlug);
        if (category) {
            filtered = filtered.filter(p => p.category === category.name);
        }
    }

    // Sort
    filtered.sort((a, b) => {
        if (sortBy === 'popular') {
            return b.views - a.views;
        } else if (sortBy === 'oldest') {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        } else {
            // Newest
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
    });

    const total = filtered.length;
    const start = (page - 1) * limit;
    const paginated = filtered.slice(start, start + limit);

    return { posts: paginated, total };
}

export async function getPopularPosts(limit: number = 3): Promise<Post[]> {
     await new Promise(resolve => setTimeout(resolve, 100));
     return [...posts].sort((a, b) => b.views - a.views).slice(0, limit);
}
