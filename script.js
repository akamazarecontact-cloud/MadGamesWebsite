// ------- DATE PRODUSE DEMO -------

const products = [
    {
        name: "Mouse Gaming RGB",
        price: 99,
        tag: "Periferice",
        image: "https://via.placeholder.com/480x360?text=Mouse+Gaming+RGB"
    },
    {
        name: "Tastatură Mecanică",
        price: 249,
        tag: "Periferice",
        image: "https://via.placeholder.com/480x360?text=Tastatura+Mecanica"
    },
    {
        name: "Căști Gaming 7.1",
        price: 199,
        tag: "Audio",
        image: "https://via.placeholder.com/480x360?text=Casti+Gaming"
    },
    {
        name: "Monitor 27\" 144Hz",
        price: 899,
        tag: "Monitoare",
        image: "https://via.placeholder.com/480x360?text=Monitor+144Hz"
    },
    {
        name: "Controller PS5 Wireless",
        price: 349,
        tag: "Periferice",
        image: "https://via.placeholder.com/480x360?text=Controller+PS5"
    },
    {
        name: "Mousepad XL RGB",
        price: 129,
        tag: "Periferice",
        image: "https://via.placeholder.com/480x360?text=Mousepad+XL"
    },
    {
        name: "Boxe Gaming 2.1",
        price: 279,
        tag: "Audio",
        image: "https://via.placeholder.com/480x360?text=Boxe+Gaming"
    },
    {
        name: "Monitor 24\" 165Hz",
        price: 799,
        tag: "Monitoare",
        image: "https://via.placeholder.com/480x360?text=Monitor+165Hz"
    }
];

// ------- GENERARE PRODUSE -------

function renderProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;

    container.innerHTML = "";

    products.forEach((p) => {
        const card = document.createElement("article");
        card.className = "product-card reveal-on-scroll";

        card.innerHTML = `
            <div class="product-image-wrap">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <h2>${p.name}</h2>
            <div class="product-meta">
                <span class="product-price">${p.price} RON</span>
                <span class="product-tag">${p.tag}</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// ------- HERO PARALLAX -------

function initHeroParallax() {
    const card = document.getElementById("hero-parallax");
    if (!card) return;

    const strength = 20;

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `rotateX(${y * -strength}deg) rotateY(${x * strength}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
    });
}

// ------- SCROLL REVEAL -------

function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.16
        }
    );

    elements.forEach((el) => observer.observe(el));
}

// ------- SMOOTH SCROLL NAV -------

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
}

// ------- MOBILE NAV -------

function initMobileNav() {
    const nav = document.querySelector(".main-nav");
    const toggle = document.querySelector(".nav-toggle");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", () => {
        nav.classList.toggle("is-open");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
        });
    });
}

// ------- FOOTER YEAR -------

function setCurrentYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// ------- FORM DEMO -------

function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(
            "Acesta este un formular demo pentru concept.\nÎn varianta finală se poate trimite către email sau backend."
        );
        form.reset();
    });
}

// ------- INIT -------

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    initHeroParallax();
    initScrollReveal();
    initSmoothScroll();
    initMobileNav();
    setCurrentYear();
    initContactForm();
});
