<script>
</script>

<div class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen flex flex-col overflow-x-hidden">
    <!-- Header -->
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 py-3 bg-surface-light dark:bg-background-dark sticky top-0 z-50">
        <div class="flex items-center gap-8">
            <div class="flex items-center gap-3 text-primary dark:text-white">
                <div class="size-8 flex items-center justify-center rounded bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <h2 class="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">TechBlog Admin</h2>
            </div>
            <!-- Search -->
            <label class="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                <div class="flex w-full flex-1 items-stretch rounded-lg h-full group">
                    <div class="text-text-secondary-light dark:text-text-secondary-dark flex border border-r-0 border-border-light dark:border-border-dark bg-surface-light dark:bg-border-dark items-center justify-center pl-3 rounded-l-lg transition-colors group-focus-within:border-primary">
                        <span class="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border border-l-0 border-border-light dark:border-border-dark bg-surface-light dark:bg-border-dark focus:border-primary h-full placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-3 text-sm font-normal leading-normal transition-colors" placeholder="Search posts..." value=""/>
                </div>
            </label>
        </div>
        <div class="flex flex-1 justify-end gap-6 items-center">
            <nav class="hidden md:flex items-center gap-6">
                <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Dashboard</a>
                <a class="text-primary dark:text-white text-sm font-medium" href="#">Posts</a>
                <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Users</a>
                <a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Settings</a>
            </nav>
            <div class="flex items-center gap-3 pl-6 border-l border-border-light dark:border-border-dark">
                <button class="flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
                    <span class="material-symbols-outlined">notifications</span>
                </button>
                <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-primary/20 cursor-pointer" data-alt="Admin user profile picture showing a smiling man" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmxl3sFlY52Sdk1DEwBigSHbgUjNITvv1zfiRpkK2nTRe3lgB0KohjXcI6JNsq0nk4SNbDZ4n7hzFSa3E5zpJVILlLHx-LspgYQ2ZOeh6F2C6fCSybCI0xm_DXhIGoS1xnjD2vh7sQz8g-MiSgD7gKs-JIQ5vrTLF0GySBBnMt8wcrzH026zbzrZ14PjnSk33ObAWF07uBcIejCr3ggVd4cp_E0HS1fwfqJ6pNQ2CAQGbsZckcQQ489snaegluikbLl1SEBvJL7q0");'></div>
            </div>
        </div>
    </header>
    <!-- Main Content -->
    <main class="flex-1 w-full max-w-[1400px] mx-auto p-4 md:p-8">
        <!-- Page Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark text-sm mb-1">
                    <span>Posts</span>
                    <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span class="text-gray-900 dark:text-white">New Post</span>
                </div>
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Create New Post</h1>
                <p class="text-text-secondary-light dark:text-text-secondary-dark">Compose and manage your technical articles with advanced resources.</p>
            </div>
            <div class="flex items-center gap-3">
                <button class="px-4 h-10 rounded-lg border border-border-light dark:border-border-dark text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-surface-dark font-medium text-sm transition-colors flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                    Preview
                </button>
                <button class="px-6 h-10 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">save</span>
                    Save Draft
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Left Column: Editor (2/3 width) -->
            <div class="lg:col-span-2 flex flex-col gap-6">
                <!-- Title Input -->
                <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-1 border border-border-light dark:border-border-dark shadow-sm">
                    <input class="w-full bg-transparent border-none text-2xl font-bold placeholder:text-text-secondary-light dark:placeholder:text-gray-600 text-gray-900 dark:text-white p-4 focus:ring-0" placeholder="Enter post title..."/>
                </div>
                <!-- Markdown Editor -->
                <div class="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden h-[600px]">
                    <!-- Toolbar -->
                    <div class="flex flex-wrap items-center gap-1 p-2 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-[#111a22]">
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Bold">
                            <span class="material-symbols-outlined text-[20px]">format_bold</span>
                        </button>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Italic">
                            <span class="material-symbols-outlined text-[20px]">format_italic</span>
                        </button>
                        <div class="w-px h-5 bg-border-light dark:bg-border-dark mx-1"></div>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="H1">
                            <span class="material-symbols-outlined text-[20px]">title</span>
                        </button>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Link">
                            <span class="material-symbols-outlined text-[20px]">link</span>
                        </button>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Quote">
                            <span class="material-symbols-outlined text-[20px]">format_quote</span>
                        </button>
                        <div class="w-px h-5 bg-border-light dark:bg-border-dark mx-1"></div>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Code Block">
                            <span class="material-symbols-outlined text-[20px]">code</span>
                        </button>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Image">
                            <span class="material-symbols-outlined text-[20px]">image</span>
                        </button>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Table">
                            <span class="material-symbols-outlined text-[20px]">table_chart</span>
                        </button>
                        <div class="flex-1"></div>
                        <button class="p-2 rounded hover:bg-gray-200 dark:hover:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors flex items-center gap-2 text-xs font-medium uppercase">
                            <span class="material-symbols-outlined text-[18px]">markdown</span>
                            Markdown Supported
                        </button>
                    </div>
                    <!-- Text Area -->
                    <textarea class="flex-1 w-full resize-none border-none bg-surface-light dark:bg-surface-dark p-6 text-base font-mono text-gray-800 dark:text-gray-200 focus:ring-0 leading-relaxed" placeholder="# Start writing your masterpiece..."></textarea>
                    <!-- Status Bar -->
                    <div class="px-4 py-2 border-t border-border-light dark:border-border-dark text-xs text-text-secondary-light dark:text-text-secondary-dark flex justify-between">
                        <span>Words: 0</span>
                        <span>Last saved: Just now</span>
                    </div>
                </div>
                <!-- Technical Metadata Section -->
                <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-border-light dark:border-border-dark shadow-sm">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">hub</span>
                        External References &amp; Metadata
                    </h3>
                    <div class="space-y-4">
                        <!-- Documentation Links -->
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Official Documentation Links</label>
                            <div class="flex gap-2">
                                <input class="flex-1 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-gray-900 dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-gray-600" placeholder="e.g., https://docs.rs/crate"/>
                                <button class="p-2 rounded-lg bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#324d67] text-gray-600 dark:text-white transition-colors">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                            </div>
                            <!-- Example added item -->
                            <div class="flex flex-wrap gap-2 mt-1">
                                <span class="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs border border-blue-100 dark:border-blue-800">
                                    <span class="material-symbols-outlined text-[14px]">link</span>
                                    rust-lang.org/book
                                    <button class="hover:text-red-500"><span class="material-symbols-outlined text-[14px]">close</span></button>
                                </span>
                            </div>
                        </div>
                        <!-- Repositories -->
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Related Repositories</label>
                            <div class="flex gap-2">
                                <div class="relative flex-1">
                                    <span class="absolute left-3 top-2.5 text-text-secondary-light dark:text-text-secondary-dark">
                                        <span class="material-symbols-outlined text-[18px]">code_blocks</span>
                                    </span>
                                    <input class="w-full pl-9 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-gray-900 dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-gray-600" placeholder="owner/repo"/>
                                </div>
                                <button class="p-2 rounded-lg bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#324d67] text-gray-600 dark:text-white transition-colors">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right Column: Sidebar (1/3 width) -->
            <div class="flex flex-col gap-6">
                <!-- Publish Settings -->
                <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-gray-50 dark:bg-[#111a22]">
                        <h3 class="font-bold text-gray-900 dark:text-white text-sm">Publishing</h3>
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                            Draft
                        </span>
                    </div>
                    <div class="p-4 space-y-4">
                        <div>
                            <label class="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Status</label>
                            <select class="w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary">
                                <option>Draft</option>
                                <option>Review Pending</option>
                                <option>Published</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Visibility</label>
                            <select class="w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary">
                                <option>Public</option>
                                <option>Members Only</option>
                                <option>Private</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Publish Date</label>
                            <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary" type="datetime-local"/>
                        </div>
                        <div class="pt-2">
                            <button class="w-full h-10 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors">
                                Publish Now
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Organization -->
                <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-[#111a22]">
                        <h3 class="font-bold text-gray-900 dark:text-white text-sm">Organization</h3>
                    </div>
                    <div class="p-4 space-y-4">
                        <!-- Categories -->
                        <div>
                            <label class="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Categories</label>
                            <div class="space-y-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input class="rounded border-gray-300 dark:border-gray-600 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
                                    <span class="text-sm text-gray-700 dark:text-gray-300">Rust Programming</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input checked class="rounded border-gray-300 dark:border-gray-600 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
                                    <span class="text-sm text-gray-700 dark:text-gray-300">Web Development</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input class="rounded border-gray-300 dark:border-gray-600 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
                                    <span class="text-sm text-gray-700 dark:text-gray-300">DevOps</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input class="rounded border-gray-300 dark:border-gray-600 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
                                    <span class="text-sm text-gray-700 dark:text-gray-300">SvelteKit</span>
                                </label>
                            </div>
                        </div>
                        <!-- Market Trends Tags -->
                        <div>
                            <label class="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Market Trends / Tags</label>
                            <div class="flex flex-wrap gap-2 mb-2">
                                <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-light dark:bg-[#111a22] text-gray-600 dark:text-gray-300 text-xs border border-border-light dark:border-border-dark">
                                    #webassembly
                                    <button class="hover:text-red-500"><span class="material-symbols-outlined text-[14px]">close</span></button>
                                </span>
                                <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-light dark:bg-[#111a22] text-gray-600 dark:text-gray-300 text-xs border border-border-light dark:border-border-dark">
                                    #performance
                                    <button class="hover:text-red-500"><span class="material-symbols-outlined text-[14px]">close</span></button>
                                </span>
                            </div>
                            <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm py-2 px-3 text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder:text-text-secondary-light dark:placeholder:text-gray-600" placeholder="Add a tag..."/>
                        </div>
                    </div>
                </div>
                <!-- Featured Image -->
                <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-[#111a22] flex justify-between items-center">
                        <h3 class="font-bold text-gray-900 dark:text-white text-sm">Featured Image</h3>
                        <button class="text-primary text-xs font-medium hover:underline">Select from Library</button>
                    </div>
                    <div class="p-4">
                        <div class="border-2 border-dashed border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-[#111a22] transition-colors cursor-pointer group">
                            <span class="material-symbols-outlined text-4xl text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary mb-2">cloud_upload</span>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Drag &amp; drop or click to upload</p>
                            <p class="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">PNG, JPG up to 5MB</p>
                        </div>
                    </div>
                </div>
                <!-- Related Content -->
                <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-[#111a22]">
                        <h3 class="font-bold text-gray-900 dark:text-white text-sm">Related Content</h3>
                    </div>
                    <div class="p-4">
                        <div class="relative mb-3">
                            <span class="absolute left-3 top-2.5 text-text-secondary-light dark:text-text-secondary-dark">
                                <span class="material-symbols-outlined text-[18px]">search</span>
                            </span>
                            <input class="w-full pl-9 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#111a22] text-sm py-2 px-3 focus:ring-primary focus:border-primary text-gray-900 dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-gray-600" placeholder="Search internal posts..."/>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-start gap-3 p-2 rounded bg-gray-50 dark:bg-[#111a22] border border-border-light dark:border-border-dark">
                                <div class="bg-cover bg-center h-10 w-10 rounded shrink-0" data-alt="Coding screen abstract" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeFlg_0h697idc16shbg2A6PWEuKCHF-sFHeOeHfEfDFu-HlKR0eqU52a2zP59uw9Us4wBeFmY145SpwOgGoAm6EWT7JVoXMhEKuyFzOlue_8-6G1nFA9Wp2152ZbXHJD7Ns7Qa2g78_GNQg7KXew2FVeACc7vkKgZ0K0Pv_LUunYf-bDZ2J6ZmAw62fkjOg-caWtN9OXcV8cp47_vOqI3yPvOL5Qa6O-2g8FtLYpsN2dQQLYjPaJtN_xxyGMtQHmQmwvfJaKRhGM')"></div>
                                <div class="min-w-0">
                                    <p class="text-xs font-medium text-gray-900 dark:text-white truncate">Getting Started with Rust</p>
                                    <p class="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">Published Oct 24, 2023</p>
                                </div>
                                <button class="ml-auto text-text-secondary-light hover:text-red-500"><span class="material-symbols-outlined text-[16px]">close</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
