const content_dir = 'contents/';
const config_file = 'config.yml';
const section_names = ['home', 'programmes', 'skills', 'awards'];

function setupSectionScrolling() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;

    const cancelScroll = () => {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
    };

    // Manual input and a second navigation always take over immediately.
    ['wheel', 'touchstart', 'pointerdown', 'resize', 'popstate', 'hashchange'].forEach(type => {
        window.addEventListener(type, cancelScroll, { passive: true });
    });
    window.addEventListener('keydown', event => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Escape', 'Tab'].includes(event.key)) {
            cancelScroll();
        }
    });
    reducedMotion.addEventListener('change', cancelScroll);

    document.querySelectorAll('#mainNav a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            cancelScroll();
            // Keep native keyboard navigation, modifier clicks, and reduced motion.
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
                event.shiftKey || event.altKey || event.detail === 0 || reducedMotion.matches) return;

            const hash = link.getAttribute('href');
            const target = document.getElementById(hash.slice(1));
            if (!target) return;
            event.preventDefault();

            const start = window.scrollY;
            const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
            const end = Math.min(maxScroll, Math.max(0, start + target.getBoundingClientRect().top - offset));
            const distance = end - start;
            const duration = Math.min(600, 280 + Math.sqrt(Math.abs(distance)) * 5);
            const startedAt = performance.now();

            if (window.location.hash !== hash) history.pushState(null, '', hash);
            if (Math.abs(distance) < 1) return;

            const step = now => {
                const progress = Math.min(1, (now - startedAt) / duration);
                const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease-out.
                window.scrollTo(0, start + distance * eased);
                animationFrame = progress < 1 ? requestAnimationFrame(step) : 0;
            };
            animationFrame = requestAnimationFrame(step);
        });
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    const mainNav = document.getElementById('mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarResponsive = document.getElementById('navbarResponsive');
    const initialHash = window.location.hash;
    let userInteracted = false;
    const markInteraction = () => { userInteracted = true; };
    const interactionEvents = ['pointerdown', 'keydown', 'wheel', 'touchstart'];
    interactionEvents.forEach(type => window.addEventListener(type, markInteraction, { passive: true }));

    if (navbarToggler && navbarResponsive) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navbarResponsive, { toggle: false });
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    collapse.hide();
                }
            });
        });
        navbarResponsive.addEventListener('keydown', event => {
            if (event.key === 'Escape' && navbarResponsive.classList.contains('show')) {
                collapse.hide();
                navbarToggler.focus();
            }
        });
    }
    setupSectionScrolling();

    const readText = async path => {
        const response = await fetch(content_dir + path, { cache: 'no-store' });
        if (!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
        return response.text();
    };

    marked.use({ mangle: false, headerIds: false });
    const configRequest = readText(config_file).then(text => {
        const config = jsyaml.load(text);
        Object.entries(config).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) element.innerHTML = value;
        });
    });

    const sectionRequests = section_names.map(async name => {
        const container = document.getElementById(name + '-md');
        try {
            const markdown = await readText(name + '.md');
            container.innerHTML = marked.parse(markdown.replace(/\[at\]/g, '@'));
        } catch (error) {
            container.textContent = 'This section could not be loaded. Please refresh the page to try again.';
            throw error;
        }
    });

    const results = await Promise.allSettled([configRequest, ...sectionRequests]);
    results.forEach(result => {
        if (result.status === 'rejected') console.error(result.reason);
    });

    // Typeset once, after all Markdown is in place, using the bundled renderer.
    try {
        if (window.MathJax?.startup?.promise) {
            await MathJax.startup.promise;
            await MathJax.typesetPromise(section_names.map(name => document.getElementById(name + '-md')));
        }
    } catch (error) {
        console.error('Math rendering failed:', error);
    }

    // Measure after both content and the original web fonts have settled.
    await document.fonts.ready;
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 80 });
    }
    if (initialHash && window.location.hash === initialHash && !userInteracted) {
        document.getElementById(initialHash.slice(1))?.scrollIntoView();
    }
    interactionEvents.forEach(type => window.removeEventListener(type, markInteraction));
});
