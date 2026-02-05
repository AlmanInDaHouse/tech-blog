<script lang="ts">
</script>

<div class="w-full flex justify-center sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 sm:px-6 lg:px-8">
        <header class="flex items-center justify-between whitespace-nowrap py-4">
            <div class="flex items-center gap-3">
                <div class="flex items-center justify-center size-10 rounded-xl bg-primary text-white">
                    <span class="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">TechBlog</h2>
            </div>
            <!-- Desktop Nav -->
            <div class="hidden md:flex flex-1 justify-end gap-8 items-center">
                <nav class="flex items-center gap-8">
                    <a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="/">Home</a>
                    <a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Features</a>
                    <a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="/feed">Blog</a>
                    <a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">About Us</a>
                </nav>
                <div class="flex gap-3">
                    <a href="/admin/login" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-900 dark:text-white text-sm font-bold transition-all decoration-0">
                        <span class="truncate">Login</span>
                    </a>
                    <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 text-sm font-bold transition-all">
                        <span class="truncate">Sign Up</span>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu Icon -->
            <div class="md:hidden text-slate-900 dark:text-white">
                <span class="material-symbols-outlined">menu</span>
            </div>
        </header>
    </div>
</div>
