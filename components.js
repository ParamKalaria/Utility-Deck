document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. HEADER COMPONENT ---
    const headerHTML = `
    <nav class="sticky top-0 z-50 border-b border-gray-200 dark:border-border-dark bg-white/80 dark:bg-[#111318]/90 backdrop-blur-md">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center gap-3">
                    <a href="index.html" class="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary transition-transform hover:scale-105">
                        <span class="material-symbols-outlined text-[24px]">terminal</span>
                    </a>
                    <div>
                        <h1 class="text-lg font-bold tracking-tight">
                            Utility Deck 
                            <span class="font-normal text-slate-400 text-base">by Param Kalaria</span>
                        </h1>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase">v1.0.0 Release</p>
                    </div>
                </div>

                <div class="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400" id="nav-links">
                    <a href="index.html" class="hover:text-primary transition-colors">Home</a>
                    <a href="privacy.html" class="hover:text-primary transition-colors">Privacy</a>
                    <a href="about.html" class="hover:text-primary transition-colors">About</a>
                </div>
            </div>
        </div>
    </nav>`;

    // --- 2. FOOTER COMPONENT ---
    const footerHTML = `
    <!--<footer class="border-t border-gray-200 dark:border-border-dark mt-auto bg-white dark:bg-[#111318]">
        <div class="max-w-[1400px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span class="material-symbols-outlined text-[18px]">terminal</span>
                    <span class="font-medium">Utility Deck by Param Kalaria</span>
                    <span>© 2023</span>
                </div>
            </div>
        </div>
    </footer>-->`;

    // --- 3. INJECT INTO PAGE ---
    const appHeader = document.getElementById('app-header');
    const appFooter = document.getElementById('app-footer');

    if(appHeader) appHeader.innerHTML = headerHTML;
    if(appFooter) appFooter.innerHTML = footerHTML;

    // --- 4. HIGHLIGHT ACTIVE LINK ---
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll('#nav-links a');
    
    links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('text-primary'); // Active color
        }
    });
});