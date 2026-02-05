<script lang="ts">
    import { onMount } from 'svelte';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';
    import { categories, trendingTopics, getPosts, getPopularPosts } from '$lib/data';
    import type { Post } from '$lib/types';

    let posts: Post[] = [];
    let popularPosts: Post[] = [];
    let totalPosts = 0;

    // State
    let selectedCategory: string | null = null;
    let sortBy: 'newest' | 'oldest' | 'popular' = 'newest';
    let currentPage = 1;
    let isLoading = true;
    const postsPerPage = 5; // 1 Featured + 4 Grid

    // Computed
    $: totalPages = Math.ceil(totalPosts / postsPerPage);

    async function loadData() {
        isLoading = true;
        try {
            const result = await getPosts(selectedCategory, sortBy, currentPage, postsPerPage);
            posts = result.posts;
            totalPosts = result.total;
        } catch (e) {
            console.error(e);
        } finally {
            isLoading = false;
        }
    }

    async function loadSidebar() {
        popularPosts = await getPopularPosts();
    }

    function handleCategoryClick(slug: string | null) {
        if (selectedCategory === slug) return;
        selectedCategory = slug;
        currentPage = 1;
        loadData();
    }

    function handleSortChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        const value = target.value;
        if (value === 'Newest') sortBy = 'newest';
        else if (value === 'Oldest') sortBy = 'oldest';
        else if (value === 'Popular') sortBy = 'popular';

        currentPage = 1;
        loadData();
    }

    function goToPage(page: number) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        loadData();
        // Scroll to top of feed
        const feedTop = document.getElementById('feed-top');
        if (feedTop) feedTop.scrollIntoView({ behavior: 'smooth' });
    }

    onMount(() => {
        loadData();
        loadSidebar();
    });
</script>

<div class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8" id="feed-top">
        <!-- Hero Section -->
        <div class="mb-12 text-center max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 text-gray-900">
                Latest Insights in Tech
            </h1>
            <p class="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                Exploring Rust, SvelteKit, and the future of full-stack development through deep dives and practical guides.
            </p>
        </div>

        <!-- Filter/Categories Bar -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border-light dark:border-border-dark overflow-x-auto">
            <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
                <button
                    class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shadow-sm {selectedCategory === null ? 'bg-primary text-white shadow-primary/20' : 'bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white hover:border-primary'}"
                    on:click={() => handleCategoryClick(null)}
                >
                    All Posts
                </button>
                {#each categories as category}
                    <button
                        class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shadow-sm {selectedCategory === category.slug ? 'bg-primary text-white shadow-primary/20' : 'bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white hover:border-primary'}"
                        on:click={() => handleCategoryClick(category.slug)}
                    >
                        {category.name}
                    </button>
                {/each}
            </div>
            <div class="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark ml-auto sm:ml-0">
                <span class="material-symbols-outlined text-[18px]">sort</span>
                <span>Sort by:</span>
                <select class="bg-transparent border-none py-0 pl-0 pr-6 text-sm font-medium focus:ring-0 text-gray-900 dark:text-white cursor-pointer" on:change={handleSortChange}>
                    <option>Newest</option>
                    <option>Popular</option>
                    <option>Oldest</option>
                </select>
            </div>
        </div>

        <!-- Featured / Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Left Column: Featured & Latest -->
            <div class="lg:col-span-8 flex flex-col gap-8">
                {#if isLoading}
                    <div class="flex items-center justify-center h-64">
                        <span class="text-lg text-text-secondary-light dark:text-text-secondary-dark animate-pulse">Loading posts...</span>
                    </div>
                {:else if posts.length === 0}
                    <div class="flex items-center justify-center h-64 border border-dashed border-border-light dark:border-border-dark rounded-xl">
                        <span class="text-lg text-text-secondary-light dark:text-text-secondary-dark">No posts found.</span>
                    </div>
                {:else}
                    <!-- Large Featured Post (First item) -->
                    {#if posts[0]}
                    <article class="group relative flex flex-col md:flex-row gap-6 bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                        <div class="w-full md:w-2/5 aspect-video md:aspect-auto relative overflow-hidden">
                            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                 style="background-image: url('{posts[0].image}');">
                            </div>
                            {#if posts[0].featured}
                            <div class="absolute top-3 left-3">
                                <span class="px-2 py-1 rounded bg-primary text-white text-xs font-bold uppercase tracking-wide">Featured</span>
                            </div>
                            {/if}
                        </div>
                        <div class="flex-1 p-6 flex flex-col justify-center">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs font-semibold text-primary">{posts[0].category}</span>
                                <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">•</span>
                                <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">{posts[0].date}</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                <a class="focus:outline-none" href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {posts[0].title}
                                </a>
                            </h3>
                            <p class="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-2">
                                {posts[0].excerpt}
                            </p>
                            <div class="flex items-center justify-between mt-auto pt-4 border-t border-border-light dark:border-border-dark/50">
                                <div class="flex items-center gap-2">
                                    <img alt="Author Avatar" class="size-6 rounded-full object-cover" src="{posts[0].author.avatar}"/>
                                    <span class="text-sm font-medium">{posts[0].author.name}</span>
                                </div>
                                <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark flex items-center gap-1">
                                    <span class="material-symbols-outlined text-[14px]">schedule</span> {posts[0].readTime}
                                </span>
                            </div>
                        </div>
                    </article>
                    {/if}

                    <!-- Sub-Grid for Recent Posts (Remaining items) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {#each posts.slice(1) as post}
                        <article class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-md transition-all group h-full">
                            <div class="aspect-[16/9] overflow-hidden relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                     style="background-image: url('{post.image}');">
                                </div>
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold">{post.category}</span>
                                </div>
                                <h3 class="text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                                    <a href="#">{post.title}</a>
                                </h3>
                                <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <div class="flex items-center justify-between text-xs text-text-secondary-light dark:text-text-secondary-dark mt-auto">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                        {/each}
                    </div>

                    <!-- Pagination -->
                    {#if totalPages > 1}
                    <div class="flex items-center justify-center gap-2 mt-4">
                        <button
                            class="size-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors disabled:opacity-50"
                            disabled={currentPage === 1}
                            on:click={() => goToPage(currentPage - 1)}
                        >
                            <span class="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>

                        {#each Array(totalPages) as _, i}
                        <button
                            class="size-10 flex items-center justify-center rounded-lg font-medium transition-colors {currentPage === i + 1 ? 'bg-primary text-white' : 'border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark'}"
                            on:click={() => goToPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                        {/each}

                        <button
                            class="size-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors disabled:opacity-50"
                            disabled={currentPage === totalPages}
                            on:click={() => goToPage(currentPage + 1)}
                        >
                            <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                    {/if}
                {/if}
            </div>

            <!-- Right Sidebar -->
            <aside class="lg:col-span-4 space-y-8">
                <!-- About Widget -->
                <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                    <h4 class="text-lg font-bold mb-4">About TechBlog</h4>
                    <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
                        A community-driven platform for full-stack developers. We explore the cutting edge of web tech with a focus on performance and security.
                    </p>
                    <a class="text-primary text-sm font-semibold hover:underline flex items-center gap-1" href="#">
                        Learn more <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                </div>

                <!-- Trending Topics -->
                <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                    <h4 class="text-lg font-bold mb-4 flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                        Trending Topics
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        {#each trendingTopics as topic}
                            <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">{topic}</a>
                        {/each}
                    </div>
                </div>

                <!-- Newsletter Widget -->
                <div class="relative overflow-hidden bg-primary p-6 rounded-xl text-white">
                    <div class="absolute -top-10 -right-10 size-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div class="relative z-10">
                        <h4 class="text-lg font-bold mb-2">Weekly Newsletter</h4>
                        <p class="text-sm text-blue-100 mb-4">Get the latest articles and tutorials sent straight to your inbox every Monday.</p>
                        <form class="flex flex-col gap-3">
                            <input class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-blue-100 text-white focus:outline-none focus:bg-white/20 text-sm" placeholder="Your email address" type="email"/>
                            <button class="w-full py-2 rounded-lg bg-white text-primary font-bold text-sm hover:bg-gray-100 transition-colors" type="button">Subscribe Now</button>
                        </form>
                    </div>
                </div>

                <!-- Popular Posts List -->
                <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                    <h4 class="text-lg font-bold mb-4">Popular This Week</h4>
                    <div class="flex flex-col gap-4">
                        {#if popularPosts.length > 0}
                            {#each popularPosts as post, i}
                                <a class="group flex gap-3" href="#">
                                    <div class="text-3xl font-bold text-border-light dark:text-border-dark group-hover:text-primary transition-colors">0{i+1}</div>
                                    <div>
                                        <h5 class="font-medium text-sm mb-1 group-hover:text-primary transition-colors">{post.title}</h5>
                                        <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">{post.views.toLocaleString()} reads</span>
                                    </div>
                                </a>
                                {#if i < popularPosts.length - 1}
                                    <div class="h-px bg-border-light dark:bg-border-dark"></div>
                                {/if}
                            {/each}
                        {:else}
                             <p class="text-sm text-text-secondary-light">Loading...</p>
                        {/if}
                    </div>
                </div>
            </aside>
        </div>
    </main>
    <AppFooter />
</div>
