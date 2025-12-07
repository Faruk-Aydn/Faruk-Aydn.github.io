const appModel = {
    meta: {
        techStack: ['Kotlin', 'Android', 'Jetpack Compose', 'MVVM', 'REST API', 'Git'],
        stats: [
            { value: '2+', label: 'Yıllık Mobil Geliştirme Deneyimi' },
            { value: '5+', label: 'Tamamlanan Uygulama / Proje' },
            { value: '3', label: 'Android / Kotlin Sertifikası' },
        ],
        highlights: [
            'Android ekosisteminde modern mimarilerle çalışan geliştirici',
            'Kotlin, MVVM ve Jetpack bileşenleriyle temiz kod odaklı',
            'Performans, UX ve sürdürülebilir mimariyi ön planda tutan',
        ],
    },
    projects: [
        {
            title: 'Görev Yönetimi (Android)',
            type: 'Mobil Uygulama',
            description:
                'Kotlin ve MVVM ile geliştirilmiş; görev ekleme, filtreleme ve bildirim özelliklerine sahip Android görev yönetim uygulaması.',
            techStack: ['Kotlin', 'Android', 'MVVM', 'Room'],
            link: '#',
        },
        {
            title: 'Alışveriş Listesi (Jetpack Compose)',
            type: 'Mobil Uygulama',
            description:
                'Jetpack Compose ile modern UI yaklaşımı kullanılarak hazırlanmış basit ve sezgisel alışveriş listesi uygulaması.',
            techStack: ['Kotlin', 'Jetpack Compose', 'ViewModel'],
            link: '#',
        },
        {
            title: 'Hava Durumu (API Entegrasyonlu)',
            type: 'Mobil Uygulama',
            description:
                'Harici REST API ile gerçek zamanlı hava durumu bilgisi gösteren, responsive kart tasarımına sahip deneysel Android projesi.',
            techStack: ['Kotlin', 'Retrofit', 'REST API', 'Coroutines'],
            link: '#',
        },
    ],
    certificates: [
        {
            id: 'certificate1',
            title: 'Algoritma Temelleri',
            image: 'images/certificate1.jpg',
            description:
                'Algoritma geliştirme ve temel programlama prensipleri konusunda sağlam bir temel.',
        },
        {
            id: 'certificate2',
            title: 'Kotlin Programlama Dili',
            image: 'images/kotlin.png',
            description:
                'Kotlin programlama dili ve Android uygulama geliştirme alanında yetkinlik.',
        },
        {
            id: 'certificate3',
            title: 'Kotlin ile Android Mobil Uygulama Geliştirme Temelleri',
            image: 'images/kotlin2.png',
            description:
                'Kotlin ile Android geliştirme pratikleri ve MVVM mimarisi konusunda bilgi pekiştirme.',
        },
    ],
    socialLinks: [
        {
            icon: 'fab fa-github',
            label: 'GitHub',
            url: 'https://github.com/Faruk-Aydn',
        },
        {
            icon: 'fab fa-linkedin',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/faruk-aydın-64110b295/',
        },
        {
            icon: 'fab fa-instagram',
            label: 'Instagram',
            url: 'https://www.instagram.com/aydin_faruk1/?next=%2F',
        },
    ],
};

const appView = {
    cacheElements() {
        this.projectSlider = document.getElementById('project-slider');
        this.certificateSlider = document.getElementById('certificate-slider');
        this.prevProjectBtn = document.getElementById('prev-btn');
        this.nextProjectBtn = document.getElementById('next-btn');
        this.prevCertBtn = document.getElementById('prev-cert-btn');
        this.nextCertBtn = document.getElementById('next-cert-btn');
        this.heroTechPills = document.getElementById('hero-tech-pills');
        this.aboutHighlights = document.getElementById('about-highlights');
        this.aboutStats = document.getElementById('about-stats');
        this.socialMedia = document.getElementById('social-media');
        this.contactForm = document.getElementById('contact-form');
    },

    renderTechPills(techList) {
        if (!this.heroTechPills) return;
        this.heroTechPills.innerHTML = techList
            .map((tech) => `<span class="hero-tech-pill">${tech}</span>`)
            .join('');
    },

    renderAbout(meta) {
        if (this.aboutHighlights) {
            this.aboutHighlights.innerHTML = meta.highlights
                .map((h) => `<li>${h}</li>`)
                .join('');
        }
        if (this.aboutStats) {
            this.aboutStats.innerHTML = meta.stats
                .map(
                    (stat) => `
                        <div class="about-stat-card fade-in-up">
                            <div class="about-stat-value">${stat.value}</div>
                            <div class="about-stat-label">${stat.label}</div>
                        </div>
                    `,
                )
                .join('');
        }
    },

    renderProjects(projects) {
        if (!this.projectSlider) return;
        const inner = document.createElement('div');
        inner.className = 'slider-inner';
        inner.innerHTML = projects
            .map(
                (project) => `
                    <article class="project-card fade-in-up">
                        <header class="project-card-header">
                            <div>
                                <div class="project-badge">${project.type}</div>
                                <h3 class="project-title">${project.title}</h3>
                            </div>
                        </header>
                        <p class="project-description">${project.description}</p>
                        <div class="project-meta">
                            <div class="project-tags">
                                ${project.techStack
                                    .map((t) => `<span class="tag">${t}</span>`)
                                    .join('')}
                            </div>
                            <a href="${project.link}" class="project-link">
                                <span>Detay</span>
                                <i class="fas fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </article>
                `,
            )
            .join('');
        this.projectSlider.innerHTML = '';
        this.projectSlider.appendChild(inner);
        this.projectInner = inner;
    },

    renderCertificates(certificates) {
        if (!this.certificateSlider) return;
        const inner = document.createElement('div');
        inner.className = 'slider-inner';
        inner.innerHTML = certificates
            .map(
                (cert) => `
                    <article class="certificate-card fade-in-up" id="${cert.id}">
                        <img src="${cert.image}" alt="${cert.title}">
                        <h3>${cert.title}</h3>
                        <p>${cert.description}</p>
                    </article>
                `,
            )
            .join('');
        this.certificateSlider.innerHTML = this.certificateSlider.innerHTML;
        this.certificateSlider.appendChild(inner);
        this.certificateInner = inner;
    },

    renderSocialLinks(links) {
        if (!this.socialMedia) return;
        this.socialMedia.innerHTML = links
            .map(
                (link) => `
                    <li>
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                            <i class="${link.icon}"></i>
                            <span>${link.label}</span>
                        </a>
                    </li>
                `,
            )
            .join('');
    },
};

const appController = {
    state: {
        currentProjectIndex: 0,
        currentCertIndex: 0,
    },

    init() {
        appView.cacheElements();
        appView.renderTechPills(appModel.meta.techStack);
        appView.renderAbout(appModel.meta);
        appView.renderProjects(appModel.projects);
        appView.renderCertificates(appModel.certificates);
        appView.renderSocialLinks(appModel.socialLinks);
        this.bindEvents();
        this.updateSliders();
        this.initSmoothScroll();
        this.initScrollAnimations();
        this.initFormHandler();
    },

    bindEvents() {
        if (appView.nextProjectBtn) {
            appView.nextProjectBtn.addEventListener('click', () => {
                this.goToProject(this.state.currentProjectIndex + 1);
            });
        }
        if (appView.prevProjectBtn) {
            appView.prevProjectBtn.addEventListener('click', () => {
                this.goToProject(this.state.currentProjectIndex - 1);
            });
        }
        if (appView.nextCertBtn) {
            appView.nextCertBtn.addEventListener('click', () => {
                this.goToCertificate(this.state.currentCertIndex + 1);
            });
        }
        if (appView.prevCertBtn) {
            appView.prevCertBtn.addEventListener('click', () => {
                this.goToCertificate(this.state.currentCertIndex - 1);
            });
        }
    },

    goToProject(index) {
        const total = appModel.projects.length;
        if (index >= total) {
            this.state.currentProjectIndex = 0;
        } else if (index < 0) {
            this.state.currentProjectIndex = total - 1;
        } else {
            this.state.currentProjectIndex = index;
        }
        this.updateSliders();
    },

    goToCertificate(index) {
        const total = appModel.certificates.length;
        if (index >= total) {
            this.state.currentCertIndex = 0;
        } else if (index < 0) {
            this.state.currentCertIndex = total - 1;
        } else {
            this.state.currentCertIndex = index;
        }
        this.updateSliders();
    },

    updateSliders() {
        if (appView.projectInner) {
            appView.projectInner.style.transform = `translateX(-${this.state.currentProjectIndex * 100}%)`;
        }
        if (appView.certificateInner) {
            appView.certificateInner.style.transform = `translateX(-${this.state.currentCertIndex * 100}%)`;
        }
    },

    initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (!targetId || targetId === '#') return;
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (!target) return;
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    },

    initScrollAnimations() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 },
        );

        const animated = document.querySelectorAll('.fade-in-up');
        animated.forEach((el) => observer.observe(el));
    },

    initFormHandler() {
        if (!appView.contactForm) return;
        appView.contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }

            alert('Mesajınız gönderildi! (Demo)');
            appView.contactForm.reset();
        });
    },
};

document.addEventListener('DOMContentLoaded', () => {
    appController.init();
});
