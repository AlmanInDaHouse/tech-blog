<script lang="ts">
</script>

<header class="w-full border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark sticky top-0 z-50">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 gap-4">
            <!-- Logo & Nav Links -->
            <div class="flex items-center gap-8">
                <a class="flex items-center gap-2 group" href="/">
                    <div class="size-8 rounded bg-primary flex items-center justify-center text-white">
                        <span class="material-symbols-outlined text-[20px]">terminal</span>
                    </div>
                    <h2 class="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">TechBlog</h2>
                </a>
                <nav class="hidden md:flex items-center gap-6">
                    <a class="text-sm font-medium hover:text-primary transition-colors" href="/">Home</a>
                    <a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="/feed">Articles</a>
                    <a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#">Tutorials</a>
                    <a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#">About</a>
                </nav>
            </div>
            <!-- Search & Actions -->
            <div class="flex items-center gap-4 flex-1 justify-end max-w-lg">
                <div class="relative flex-1 hidden sm:block">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary-light dark:text-text-secondary-dark">
                        <span class="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input class="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-lg leading-5 bg-background-light dark:bg-surface-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out" placeholder="Search articles, tags..." type="text"/>
                </div>
                <button class="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm whitespace-nowrap">
                    Subscribe
                </button>
                <!-- Mobile Menu Button -->
                <button class="md:hidden p-2 text-text-secondary-light dark:text-text-secondary-dark">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </div>
    </div>
</header>
