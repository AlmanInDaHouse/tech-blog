<script lang="ts">
    import { goto } from '$app/navigation';

    let username = '';
    let password = '';
    let showPassword = false;
    let error = '';
    let isLoading = false;

    async function handleLogin() {
        isLoading = true;
        error = '';

        // Mock delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (username === 'admin' && password === 'admin') {
            goto('/admin/posts/new');
        } else {
            error = 'Invalid credentials. Try admin/admin';
        }
        isLoading = false;
    }

    function togglePasswordVisibility() {
        showPassword = !showPassword;
    }
</script>

<div class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-inter text-[#111418] dark:text-white overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
        <!-- Header -->
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#233648] px-10 py-4 bg-white dark:bg-[#101922]">
            <div class="flex items-center gap-4 text-[#111418] dark:text-white">
                <div class="size-8 text-primary">
                    <svg class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6_535)">
                            <path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath>
                        </defs>
                    </svg>
                </div>
                <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">TechBlog Admin</h2>
            </div>
            <div class="flex flex-1 justify-end gap-8">
                <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-[#192633] text-[#111418] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-[#233648] transition-colors">
                    <span class="truncate">Need Help?</span>
                </button>
            </div>
        </header>
        <!-- Main Content -->
        <main class="flex flex-1 justify-center items-center py-10 px-4 sm:px-10">
            <div class="flex flex-col max-w-[480px] w-full flex-1">
                <div class="text-center mb-8">
                    <div class="mx-auto bg-primary/20 p-4 rounded-full size-20 flex items-center justify-center mb-6">
                        <span class="material-symbols-outlined text-primary text-4xl">
                            admin_panel_settings
                        </span>
                    </div>
                    <h1 class="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-2">Admin Portal Access</h1>
                    <p class="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal">
                        Secure login restricted to whitelisted IPs.
                    </p>
                </div>
                <form on:submit|preventDefault={handleLogin} class="flex flex-col gap-5 px-4 py-3 w-full">
                    {#if error}
                        <div class="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg text-center font-medium">
                            {error}
                        </div>
                    {/if}

                    <!-- Username Field -->
                    <label class="flex flex-col min-w-40 flex-1">
                        <p class="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Username</p>
                        <div class="relative flex items-center">
                            <span class="material-symbols-outlined absolute left-4 text-[#92adc9] z-10">person</span>
                            <input bind:value={username} class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-white dark:bg-[#192633] focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] pl-12 pr-4 text-base font-normal leading-normal transition-all" placeholder="Enter admin username (admin)" required/>
                        </div>
                    </label>
                    <!-- Password Field -->
                    <label class="flex flex-col min-w-40 flex-1">
                        <div class="flex justify-between items-center pb-2">
                            <p class="text-[#111418] dark:text-white text-base font-medium leading-normal">Password</p>
                            <a class="text-sm font-medium text-primary hover:text-blue-400 transition-colors" href="#">Forgot password?</a>
                        </div>
                        <div class="flex w-full flex-1 items-stretch rounded-lg relative">
                            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#92adc9] z-10">lock</span>
                            <input bind:value={password} class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-white dark:bg-[#192633] focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] pl-12 pr-12 text-base font-normal leading-normal transition-all" placeholder="Enter secure password (admin)" type={showPassword ? 'text' : 'password'} required/>
                            <button type="button" on:click={togglePasswordVisibility} class="absolute right-0 top-0 h-full flex items-center pr-4 cursor-pointer text-[#92adc9] hover:text-white">
                                <span class="material-symbols-outlined">{showPassword ? 'visibility' : 'visibility_off'}</span>
                            </button>
                        </div>
                    </label>
                    <!-- Submit Button -->
                    <button disabled={isLoading} class="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed">
                        {#if isLoading}
                            <span class="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                        {:else}
                            <span class="truncate">Authenticate</span>
                        {/if}
                    </button>
                    <!-- Security Notice -->
                    <div class="mt-4 flex items-start gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <span class="material-symbols-outlined text-emerald-500 text-sm mt-0.5">verified_user</span>
                        <p class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                            Connection encrypted. Your IP address is being logged for security auditing purposes.
                        </p>
                    </div>
                </form>
            </div>
        </main>
        <!-- Subtle Footer -->
        <footer class="flex justify-center pb-6 opacity-50">
            <p class="text-xs text-[#111418] dark:text-white">© 2024 TechBlog Platform. All rights reserved.</p>
        </footer>
    </div>
</div>
