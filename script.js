// Loading
    window.addEventListener('load', () => {
        setTimeout(() => document.getElementById('loading').classList.add('hidden'), 600);
    });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navbar-menu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('.navitem').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('open'));
    });

    // Navbar scroll
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
        document.getElementById('scroll-to-top').classList.toggle('visible', window.scrollY > 400);
    });

    // Scroll to top
    document.getElementById('scroll-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Animate on scroll + skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Active nav on scroll
    const sections = document.querySelectorAll('section[id], div[id]');
    const navItems = document.querySelectorAll('.navitem');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
        });
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === '#' + current);
        });
    });