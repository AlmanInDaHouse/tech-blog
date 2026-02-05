<script>
    import LandingHeader from '$lib/components/LandingHeader.svelte';
    import LandingFooter from '$lib/components/LandingFooter.svelte';
</script>

<div class="relative flex h-auto min-h-screen w-full flex-col overflow-hidden font-display">
    <div class="layout-container flex h-full grow flex-col">
        <!-- Navigation -->
        <LandingHeader />

        <!-- Main Content Area -->
        <div class="flex flex-1 justify-center py-5 px-4 sm:px-6 lg:px-8">
            <div class="layout-content-container flex flex-col max-w-[1280px] flex-1 gap-12">
                <!-- Hero Section -->
                <div class="@container w-full">
                    <div class="rounded-2xl overflow-hidden relative min-h-[560px] flex flex-col items-center justify-center p-8 sm:p-16 text-center group">
                        <!-- Background Image with Overlay -->
                        <div class="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105" data-alt="Abstract cyber security background with blue lighting" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuChTMSKY4zGOaGnt2dL_byh2fN2Mg0SNlzN0j2qavnibGhpVA5m0-WXgaxHFUTvi9E_MvszBvVpYoWuUm9XBqE9PdGtM35byRhl_FGocqhHNCU7Lq8I9Qr8t-6NcD9LlsztfLmr2IL37n3ijtk8jg2YIwSG9PPn05J_wRgRypcjh6ikKDRjDnyk2EANltDehqPiSr8mbpiizDifjD2MOIpwkWTfY9OUt3ctFneEhc_9migjWnwFzC4nCUjsSkwKOZO9AUwIszOhri4"); background-size: cover; background-position: center;'>
                        </div>
                        <div class="absolute inset-0 z-10 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark/90 mix-blend-multiply"></div>
                        <div class="absolute inset-0 z-10 bg-black/40"></div>
                        <!-- Hero Content -->
                        <div class="relative z-20 flex flex-col gap-6 max-w-3xl mx-auto items-center">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                                <span class="relative flex h-2 w-2">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span class="text-xs font-semibold text-blue-200 tracking-wide uppercase">v2.0 Now Live</span>
                            </div>
                            <h1 class="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm">
                                Insights from the <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Rust &amp; SvelteKit</span> Frontier
                            </h1>
                            <p class="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-md">
                                Explore the architecture, code, and stories behind building a full-stack secure platform designed for the modern web.
                            </p>
                            <div class="flex flex-wrap gap-4 justify-center mt-4">
                                <a href="/feed" class="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-xl h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                                    <span class="material-symbols-outlined text-[20px]">article</span>
                                    <span class="truncate">Acceder al Blog</span>
                                </a>
                                <button class="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-xl h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-base font-bold transition-all hover:-translate-y-0.5">
                                    <span class="material-symbols-outlined text-[20px]">group</span>
                                    <span class="truncate">Sobre los Devs</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Features Section -->
                <div class="flex flex-col gap-12 py-10">
                    <div class="flex flex-col gap-4 text-center items-center">
                        <h2 class="text-slate-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight max-w-[800px]">
                            Built for Performance &amp; Security
                        </h2>
                        <p class="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[720px]">
                            Our platform leverages the speed of Rust and the reactivity of SvelteKit to deliver a seamless reading experience without compromising on safety.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Feature 1 -->
                        <div class="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#192633] p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-blue-900/10">
                            <div class="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl">memory</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-slate-900 dark:text-white text-xl font-bold">Rust Backend</h3>
                                <p class="text-slate-600 dark:text-slate-400 text-base">High-performance, memory-safe backend architecture ensuring stability under heavy loads.</p>
                            </div>
                        </div>
                        <!-- Feature 2 -->
                        <div class="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#192633] p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-blue-900/10">
                            <div class="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl">electric_bolt</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-slate-900 dark:text-white text-xl font-bold">SvelteKit Frontend</h3>
                                <p class="text-slate-600 dark:text-slate-400 text-base">Lightning-fast rendering and an intuitive user interface that feels instantaneous.</p>
                            </div>
                        </div>
                        <!-- Feature 3 -->
                        <div class="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#192633] p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-blue-900/10">
                            <div class="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-slate-900 dark:text-white text-xl font-bold">Secure Admin</h3>
                                <p class="text-slate-600 dark:text-slate-400 text-base">Role-based access control and encrypted data handling for maximum administrative security.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer -->
                <LandingFooter />
            </div>
        </div>
    </div>
</div>
