<script>
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';
</script>

<div class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                <button class="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap shadow-sm shadow-primary/20">
                    All Posts
                </button>
                <button class="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white hover:border-primary transition-all text-sm font-medium whitespace-nowrap">
                    AI in Cybersecurity
                </button>
                <button class="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white hover:border-primary transition-all text-sm font-medium whitespace-nowrap">
                    Software Development
                </button>
                <button class="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white hover:border-primary transition-all text-sm font-medium whitespace-nowrap">
                    Innovative Tech
                </button>
                <button class="px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white hover:border-primary transition-all text-sm font-medium whitespace-nowrap">
                    Featured Projects
                </button>
            </div>
            <div class="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark ml-auto sm:ml-0">
                <span class="material-symbols-outlined text-[18px]">sort</span>
                <span>Sort by:</span>
                <select class="bg-transparent border-none py-0 pl-0 pr-6 text-sm font-medium focus:ring-0 text-gray-900 dark:text-white cursor-pointer">
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
                <!-- Large Featured Post -->
                <article class="group relative flex flex-col md:flex-row gap-6 bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <div class="w-full md:w-2/5 aspect-video md:aspect-auto relative overflow-hidden">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Code on screen showing rust programming language" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFpGAIIOugQ8OlfwNq5Nm9PZlaoJo8-L3626cQE7o3YkFxq4Dln2sf9QIa6cxccTGKyHux5SSc9DRONKONK3-myOV4PX4ktP-RYcOKz_wvh5eB2H2fb5GqyhT4zu2fCnBMfEKKEtF6BZtwHycTGp-xQImfS4iKBLHZo-MB2L9htyFMWs_Nk3nBCrwV4RY_XGnpEr1nhfn5qNOPP-4sBlnlcPYyv3ciBL0Ssk0haxVgwZW2rt1VKbktc5XZ1uWwOoXjbO1Hd722Fgg');">
                        </div>
                        <div class="absolute top-3 left-3">
                            <span class="px-2 py-1 rounded bg-primary text-white text-xs font-bold uppercase tracking-wide">Featured</span>
                        </div>
                    </div>
                    <div class="flex-1 p-6 flex flex-col justify-center">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="text-xs font-semibold text-primary">Software Development</span>
                            <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">•</span>
                            <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">Oct 24, 2023</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                            <a class="focus:outline-none" href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Securing Rust Applications: A Comprehensive Guide
                            </a>
                        </h3>
                        <p class="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-2">
                            A deep dive into memory safety, concurrency patterns, and how to build robust backend systems that scale securely using Rust's ownership model.
                        </p>
                        <div class="flex items-center justify-between mt-auto pt-4 border-t border-border-light dark:border-border-dark/50">
                            <div class="flex items-center gap-2">
                                <img alt="Author Avatar" class="size-6 rounded-full object-cover" data-alt="Portrait of a young man wearing glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIip_OZ62KMTYQRixivR7rwdu4Q21rG7RPW7Pzaqyb34MbEdQaqeYNpT5VZkilDwdsR5aY2hZwyAAPcHV8c3RZ7keQdJ59U38be3rbdicBntTOUGuAQTNU3yTa5MZMbGXvSDXGlZGThqL526JU4A35wWvrXAOQufNEwm_RNtm567CF4Zkq0_2f5btGjBAl_uuzazzHcnd93EsKF3Un0OP7yZIaCNQEXnSYeisCmxYntl7Y61IgaPr7SWBCFEI_t5KaQUsF6BusIs"/>
                                <span class="text-sm font-medium">Alex Chen</span>
                            </div>
                            <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark flex items-center gap-1">
                                <span class="material-symbols-outlined text-[14px]">schedule</span> 8 min read
                            </span>
                        </div>
                    </div>
                </article>
                <!-- Sub-Grid for Recent Posts -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Post Card 1 -->
                    <article class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-md transition-all group h-full">
                        <div class="aspect-[16/9] overflow-hidden relative">
                            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Abstract visualization of AI neural network nodes" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB44OxZ4nWBJAumsCSH_lTGTv9o-u_uzApY8VVfUnKI33BId_CQoiLXEocza1kpvziK1vT0pydL0y_98mQPBv3186yhi5oZd7XCdqLS49yMegLxGUqeaHbzbU-UiR_4hGQv0_dlAtrkCt2k-gb8h0PIIIPqtr8zEziaNGNK7oLmAbZdXKoyUXBu9aRSTG8gUM_GpCMQRnA-rmXcvOaJOAnGPI7OrP4Q9uQPIO4euqb29apV92W7qqMby_PZiU2l3-cY0lNJh-z1vI');">
                            </div>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold">AI in Cybersecurity</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                                <a href="#">Generative AI: The New Frontier in Threat Detection</a>
                            </h3>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 mb-4 flex-1">
                                How machine learning models are evolving to predict zero-day vulnerabilities before they can be exploited by attackers.
                            </p>
                            <div class="flex items-center justify-between text-xs text-text-secondary-light dark:text-text-secondary-dark mt-auto">
                                <span>Nov 02, 2023</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </article>
                    <!-- Post Card 2 -->
                    <article class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-md transition-all group h-full">
                        <div class="aspect-[16/9] overflow-hidden relative">
                            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Svelte logo or modern javascript framework concept art" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIRvwRgdy_0UVgIyeYTRc1Qw-K169J4V4oosnLk6d7wHuxpQxofH6On4heZFVAAb118sr_zeJ4OGfxmFwCrKSRTVNAqXmcWCSjETKe5d8LrivHJMZ5omM6xGtmw2ShB3wwctLmkbZdYhiolcsFcoIdnhB7wflGVFRRg750Z9xUhSqXoMDlfJZTDkCIu2wor0dFG0SJbYiBANd0YQ_tpcf8Zr6tWbm1W0Hz4WnExuS9cJYR7QtGuhzVonc0zp30t_f2lcd7FbXwUpM');">
                            </div>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold">Innovative Tech</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                                <a href="#">Why SvelteKit is Changing the Game for JAMstack</a>
                            </h3>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 mb-4 flex-1">
                                Comparing the performance metrics of SvelteKit against traditional React frameworks in 2024 web development.
                            </p>
                            <div class="flex items-center justify-between text-xs text-text-secondary-light dark:text-text-secondary-dark mt-auto">
                                <span>Oct 28, 2023</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </article>
                    <!-- Post Card 3 -->
                    <article class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-md transition-all group h-full">
                        <div class="aspect-[16/9] overflow-hidden relative">
                            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up of electronic circuit board with chips" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiHcqX2LGzIkc7rFg_FkLXnj71RxveU-JvAgbUIs0D0udi_ePVnrpFE_iUV727ephysEmMkeDfYnFxRHtfpUlseKPHTKCWb37CNW0kshyFNHw8iqfGoh-2Jj6FuRjOQ0LwEUckpk9IWSRgRMqv5a3WfgZDYvihGJ52jgqmbi37EgJOgb4_tEknxcW9InmI4pMKEMBT1FS_jUuNBaHPQjj0fWQJljOYKjAJabLWvauWuSLsj6LQAJRtS9KgiopZtz8w5yJJkJM0b8A');">
                            </div>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 text-xs font-semibold">Featured Projects</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                                <a href="#">Project Spotlight: Open Source IoT Dashboard</a>
                            </h3>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 mb-4 flex-1">
                                We built a real-time IoT monitoring dashboard using Rust for the backend and WebSockets for live data streaming.
                            </p>
                            <div class="flex items-center justify-between text-xs text-text-secondary-light dark:text-text-secondary-dark mt-auto">
                                <span>Oct 15, 2023</span>
                                <span>12 min read</span>
                            </div>
                        </div>
                    </article>
                    <!-- Post Card 4 -->
                    <article class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-md transition-all group h-full">
                        <div class="aspect-[16/9] overflow-hidden relative">
                            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Digital lock icon representing cyber security" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlfrOKz6s2JM-w8IWKLW7m7E_luhuQlhUBs00kpv-147lI9mFUKVS28XGXYtEepJs0ErISsukP334b9Y87WLOGUwRjgIwbEtusVUGghPgOC1Jg13lGjSeN6oF-ZKjREIhPgWHVsQgYCJAbqpYXGIksVc9IBUSPZHzlUvfUBs4I43zaQd9oI-EV5OLvg0r2DTj8rPc0qENViidQxXfPQyg_qaaqlgjkn9TCoD9v-szxw-PD304wgi9hvW68hkittnJhOu_-jPmOqUk');">
                            </div>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold">AI in Cybersecurity</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                                <a href="#">Understanding Adversarial Machine Learning</a>
                            </h3>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 mb-4 flex-1">
                                An introduction to how attackers can fool AI systems and what developers can do to harden their models.
                            </p>
                            <div class="flex items-center justify-between text-xs text-text-secondary-light dark:text-text-secondary-dark mt-auto">
                                <span>Sep 30, 2023</span>
                                <span>9 min read</span>
                            </div>
                        </div>
                    </article>
                </div>
                <!-- Pagination -->
                <div class="flex items-center justify-center gap-2 mt-4">
                    <button class="size-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                        <span class="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <button class="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
                    <button class="size-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">2</button>
                    <button class="size-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">3</button>
                    <span class="px-2 text-text-secondary-light dark:text-text-secondary-dark">...</span>
                    <button class="size-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                        <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>
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
                        <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">#RustLang</a>
                        <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">#SvelteKit</a>
                        <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">#WebAssembly</a>
                        <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">#GraphQL</a>
                        <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">#CyberSec</a>
                        <a class="px-3 py-1.5 rounded-lg bg-background-light dark:bg-background-dark text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border-light dark:border-border-dark" href="#">#DevOps</a>
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
                        <a class="group flex gap-3" href="#">
                            <div class="text-3xl font-bold text-border-light dark:text-border-dark group-hover:text-primary transition-colors">01</div>
                            <div>
                                <h5 class="font-medium text-sm mb-1 group-hover:text-primary transition-colors">Building a Custom Admin Panel with SvelteKit</h5>
                                <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">5.2k reads</span>
                            </div>
                        </a>
                        <div class="h-px bg-border-light dark:bg-border-dark"></div>
                        <a class="group flex gap-3" href="#">
                            <div class="text-3xl font-bold text-border-light dark:text-border-dark group-hover:text-primary transition-colors">02</div>
                            <div>
                                <h5 class="font-medium text-sm mb-1 group-hover:text-primary transition-colors">Optimizing Rust Structs for Memory Usage</h5>
                                <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">4.1k reads</span>
                            </div>
                        </a>
                        <div class="h-px bg-border-light dark:bg-border-dark"></div>
                        <a class="group flex gap-3" href="#">
                            <div class="text-3xl font-bold text-border-light dark:text-border-dark group-hover:text-primary transition-colors">03</div>
                            <div>
                                <h5 class="font-medium text-sm mb-1 group-hover:text-primary transition-colors">Zero Trust Architecture for Web Apps</h5>
                                <span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">3.8k reads</span>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </main>
    <AppFooter />
</div>
