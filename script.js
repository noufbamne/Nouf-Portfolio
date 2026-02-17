// DOM Elements
const header = document.getElementById('header');
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const scrollDown = document.getElementById('scroll-down');
const backToTopBtn = document.getElementById('back-to-top');
const progressBars = document.querySelectorAll('.progress-bar');
const servicesCarousel = document.getElementById('services-carousel');
const prevServiceBtn = document.getElementById('prev-service');
const nextServiceBtn = document.getElementById('next-service');
const carouselDots = document.getElementById('carousel-dots');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const heroElements = document.querySelectorAll('.hero-greeting, .glitch-text, .typing-container, .hero-description, .hero-btns, .hero-socials');
const preloader = document.querySelector('.preloader');

// Initialize libraries when DOM is loaded
// Initialize libraries when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }
    
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined' && document.getElementById('hero-particles')) {
        particlesJS('hero-particles', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#0ff0fc", "#8a2be2", "#fe53bb", "#09fbd3"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0ff0fc",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Initialize Tilt.js for floating cards
    if (typeof $ !== 'undefined') {
        if ($('[data-tilt]').length) {
            $('[data-tilt]').tilt({
                maxTilt: 20,
                perspective: 1000,
                scale: 1.05,
                speed: 400,
                glare: true,
                maxGlare: 0.3
            });
        }
    }
    
    // Initialize GSAP animations
    initGSAP();
    
    // Initialize WebGL particles effect
    initWebGLParticles();
    
    // Initialize intro animations when everything is loaded
    setTimeout(() => {
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }, 500);
});

// Custom cursor

// Preloader
window.addEventListener('load', () => {
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        }, 1000);
    }
});

// GSAP Animations
function initGSAP() {
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger Plugin
        if (gsap.registerPlugin && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Skills animations
            gsap.utils.toArray('.skill-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1
                });
            });
            
            // Projects animations
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1
                });
            });
            
            // Timeline for certifications
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    x: i % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 0.8
                });
            });
            
            // Parallax effects
            gsap.utils.toArray('.parallax-element').forEach(element => {
                gsap.to(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    },
                    y: -150,
                    ease: 'none'
                });
            });
        }
    }
}

// 3D WebGL Particles
function initWebGLParticles() {
    if (typeof THREE !== 'undefined' && document.getElementById('particle-canvas')) {
        const canvas = document.getElementById('particle-canvas');
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        
        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        
        const colorOptions = [
            new THREE.Color(0x0ff0fc), // cyan
            new THREE.Color(0x8a2be2), // purple
            new THREE.Color(0xfe53bb), // pink
            new THREE.Color(0x09fbd3)  // green
        ];
        
        for (let i = 0; i < particlesCount; i++) {
            // Position
            positions[i * 3] = (Math.random() - 0.5) * 10;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
            
            // Color
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            colors[i * 3] = color.r;     // r
            colors[i * 3 + 1] = color.g; // g
            colors[i * 3 + 2] = color.b; // b
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            sizeAttenuation: true,
            vertexColors: true,
            transparent: true,
            alphaTest: 0.01
        });
        
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        // Animation
        function animate() {
            requestAnimationFrame(animate);
            
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.0005;
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}

// Theme Toggle
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.add('theme-transition');
        
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 1000);
        
        // Update icon
        if (document.body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Save theme preference
        const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Mobile Menu Toggle
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Add glitch animation when opening menu
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.style.animation = 'glitch-anim 0.3s forwards';
            setTimeout(() => {
                mobileMenu.style.animation = '';
            }, 300);
        }
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Header scroll effect with glitch effect
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) {
            if (!header.classList.contains('scrolled')) {
                header.classList.add('scrolled');
                header.style.animation = 'glitch-anim 0.2s forwards';
                setTimeout(() => {
                    header.style.animation = '';
                }, 200);
            }
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Parallax scroll effect for hero section
    if (document.querySelector('.hero')) {
        const heroSection = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition <= heroSection.offsetHeight) {
            const parallaxValue = scrollPosition * 0.4;
            if (document.querySelector('.hero-3d-element')) {
                document.querySelector('.hero-3d-element').style.transform = `translateY(${parallaxValue}px)`;
            }
        }
    }
});

// Scroll Down Button with futuristic effect
if (scrollDown) {
    scrollDown.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        
        // Add a ripple effect on click
        const ripple = document.createElement('div');
        ripple.className = 'scroll-ripple';
        scrollDown.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 800);
        
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Back to Top Button with futuristic animation
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add a pulse animation before scrolling
        backToTopBtn.classList.add('pulse');
        
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                backToTopBtn.classList.remove('pulse');
            }, 800);
        }, 300);
    });
}

// Animate progress bars on scroll with improved animation
function animateProgressBars() {
    if (progressBars) {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                bar.style.width = `${progress}%`;
                
                // Add glow effect when the bar reaches its end
                setTimeout(() => {
                    bar.classList.add('glow-effect');
                }, progress * 10); // Delay based on progress value
            } else {
                bar.style.width = '0%';
                bar.classList.remove('glow-effect');
            }
        });
    }
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Services Carousel with 3D perspective effect
if (servicesCarousel) {
    let currentSlide = 0;
    const serviceCards = servicesCarousel.querySelectorAll('.service-card');
    const totalSlides = serviceCards.length;
    const slidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 2 : 3;
    const maxSlides = totalSlides - slidesPerView;
    
    // Create carousel dots
    if (carouselDots) {
        for (let i = 0; i <= maxSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            carouselDots.appendChild(dot);
        }
    }
    
    function updateCarousel() {
        const slideWidth = serviceCards[0].offsetWidth + 20; // card width + gap
        
        // Apply 3D effect to cards
        serviceCards.forEach((card, index) => {
            const position = index - currentSlide;
            const zIndex = position === 0 ? 3 : position === 1 || position === -1 ? 2 : 1;
            const scale = position === 0 ? 1 : position === 1 || position === -1 ? 0.9 : 0.8;
            const opacity = position === 0 ? 1 : position === 1 || position === -1 ? 0.7 : 0.4;
            
            card.style.zIndex = zIndex;
            card.style.transform = `translateX(${position * slideWidth}px) scale(${scale})`;
            card.style.opacity = opacity;
        });
        
        // Update dots
        if (carouselDots) {
            const dots = carouselDots.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentSlide = currentSlide < maxSlides ? currentSlide + 1 : 0;
        
        // Add transition effect
        servicesCarousel.style.transition = 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)';
        
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : maxSlides;
        
        // Add transition effect
        servicesCarousel.style.transition = 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)';
        
        updateCarousel();
    }
    
    if (prevServiceBtn) prevServiceBtn.addEventListener('click', prevSlide);
    if (nextServiceBtn) nextServiceBtn.addEventListener('click', nextSlide);
    
    // Initialize carousel
    updateCarousel();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newSlidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 2 : 3;
        if (newSlidesPerView !== slidesPerView) {
            location.reload(); // Simple solution to recalculate everything
        }
    });
    
    // Auto slide
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    servicesCarousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    servicesCarousel.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    servicesCarousel.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, false);
    
    servicesCarousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50; // minimum distance to be considered a swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide(); // swipe left
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide(); // swipe right
        }
    }
}

// Projects Page Functionality with filter animations
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        const projectItems = document.querySelectorAll('.project-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Active button with enhanced animation
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.animation = '';
                });
                
                button.classList.add('active');
                button.style.animation = 'pulse 0.5s forwards';
                
                // Filter projects with staggered animation
                const filterValue = button.getAttribute('data-filter');
                
                projectItems.forEach((item, index) => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || filterValue === category) {
                        item.classList.remove('hidden');
                        
                        // Apply staggered animation
                        item.style.animation = '';
                        setTimeout(() => {
                            item.style.animation = 'fadeInUp 0.5s forwards';
                        }, index * 100);
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
    
    // Project Modal with enhanced animations
    const projectViewButtons = document.querySelectorAll('.project-view');
    
    projectViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = button.getAttribute('href');
            const modal = document.querySelector(modalId);
            
            if (modal) {
                // Open modal with glitch effect
                modal.classList.add('active');
                
                const modalContent = modal.querySelector('.modal-content');
                
                modalContent.style.animation = 'glitch-anim 0.3s, fadeIn 0.5s';
                
                // Close modal when clicking outside or on close button
                modal.addEventListener('click', (e) => {
                    if (e.target === modal || e.target.classList.contains('modal-close')) {
                        // Close with animation
                        modalContent.style.animation = 'glitch-anim 0.3s, fadeOut 0.5s';
                        
                        setTimeout(() => {
                            modal.classList.remove('active');
                        }, 500);
                    }
                });
                
                // Escape key to close modal
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        modalContent.style.animation = 'glitch-anim 0.3s, fadeOut 0.5s';
                        
                        setTimeout(() => {
                            modal.classList.remove('active');
                        }, 500);
                    }
                });
                
                // Thumbnail gallery with hover effects
                const thumbnails = modal.querySelectorAll('.thumbnail-images img');
                const mainImage = modal.querySelector('.main-image img');
                
                thumbnails.forEach(thumb => {
                    thumb.addEventListener('click', () => {
                        thumbnails.forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                        
                        // Image swap with zoom effect
                        mainImage.style.opacity = '0';
                        mainImage.style.transform = 'scale(0.9)';
                        
                        setTimeout(() => {
                            mainImage.src = thumb.src.replace('/200/150', '/800/500');
                            
                            setTimeout(() => {
                                mainImage.style.opacity = '1';
                                mainImage.style.transform = 'scale(1)';
                            }, 100);
                        }, 300);
                    });
                });
            }
        });
    });
});

// Enhanced Scroll Reveal Animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal-element:not(.revealed)');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
}

// Initial setup for reveal elements
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to specific elements
    document.querySelectorAll('.skill-card, .service-card, .project-card, .timeline-item, .language-card').forEach(element => {
        element.classList.add('reveal-element');
    });
    
    // Initial check
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// Text scramble effect for futuristic headings
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="glitch-char">${char}</span>`;
            } else {
                output += from;
            }
        }
        
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Apply text scramble effect to futuristic headings
document.addEventListener('DOMContentLoaded', () => {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    if (sectionTitles.length > 0) {
        sectionTitles.forEach(heading => {
            const originalText = heading.textContent;
            
            // Use Intersection Observer for better performance
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fx = new TextScramble(heading);
                        fx.setText(originalText);
                        observer.unobserve(heading);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(heading);
        });
    }
});

// Form validation with animations
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Enhanced validation
        let valid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.borderColor = 'var(--accent-tertiary)';
                input.style.animation = 'shake 0.5s';
                
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            } else {
                input.style.borderColor = 'var(--accent-primary)';
                input.style.animation = 'pulse 0.5s';
                
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            }
        });
        
        if (valid) {
            // Normally this would submit to a server
            // For demo, show a success message with animation
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Form submitted with values:', formValues);
            
            // Show sending animation
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending delay
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message with animation
              // Show success message with animation
              const successMessage = document.createElement('div');
              successMessage.className = 'form-success';
              successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!';
              successMessage.style.color = 'var(--accent-quaternary)';
              successMessage.style.padding = '15px';
              successMessage.style.marginTop = '20px';
              successMessage.style.borderRadius = '8px';
              successMessage.style.background = 'rgba(9, 251, 211, 0.1)';
              successMessage.style.display = 'flex';
              successMessage.style.alignItems = 'center';
              successMessage.style.gap = '10px';
              successMessage.style.border = '1px solid var(--accent-quaternary)';
              successMessage.style.animation = 'fadeInUp 0.5s forwards';
              
              contactForm.appendChild(successMessage);
              
              // Reset button
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
              
              // Remove success message after 5 seconds
              setTimeout(() => {
                  successMessage.style.animation = 'fadeOut 0.5s forwards';
                  
                  setTimeout(() => {
                      successMessage.remove();
                  }, 500);
              }, 5000);
          }, 1500);
      }
  });
  
  // Futuristic input effect on focus
  contactForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('focus', () => {
          input.parentElement.classList.add('input-focused');
      });
      
      input.addEventListener('blur', () => {
          input.parentElement.classList.remove('input-focused');
      });
      
      input.addEventListener('input', () => {
          input.style.borderColor = '';
      });
  });
}

// Handle navigation active state based on scroll position
function updateNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  if (sections.length > 0 && navLinks.length > 0) {
      let currentId = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
              currentId = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
              
              // Add pulse animation when becoming active
              link.style.animation = 'pulse 0.5s';
              setTimeout(() => {
                  link.style.animation = '';
              }, 500);
          }
      });
  }
}

window.addEventListener('scroll', updateNavActiveState);
window.addEventListener('load', updateNavActiveState);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              // Add ripple effect
              const rect = this.getBoundingClientRect();
              const ripple = document.createElement('div');
              ripple.className = 'scroll-ripple';
              ripple.style.left = `${e.clientX - rect.left}px`;
              ripple.style.top = `${e.clientY - rect.top}px`;
              this.appendChild(ripple);
              
              setTimeout(() => {
                  ripple.remove();
              }, 800);
              
              // Scroll to target
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              if (hamburger && mobileMenu && hamburger.classList.contains('active')) {
                  hamburger.classList.remove('active');
                  mobileMenu.classList.remove('active');
              }
          }
      }
  });
});

// Add glitch effect on hover for section titles
document.querySelectorAll('.section-title').forEach(title => {
  title.addEventListener('mouseenter', () => {
      title.style.animation = 'glitch-anim 0.5s';
  });
  
  title.addEventListener('mouseleave', () => {
      setTimeout(() => {
          title.style.animation = '';
      }, 500);
  });
});

// Animate floating cards on scroll
window.addEventListener('scroll', () => {
  const heroSection = document.querySelector('.hero');
  const floatingCards = document.querySelectorAll('.floating-card');
  
  if (heroSection && floatingCards.length > 0) {
      const scrollPosition = window.scrollY;
      const heroHeight = heroSection.offsetHeight;
      
      if (scrollPosition <= heroHeight) {
          const scrollPercentage = scrollPosition / heroHeight;
          
          floatingCards.forEach((card, index) => {
              const yMovement = scrollPercentage * (50 + index * 20);
              const xMovement = scrollPercentage * (index % 2 === 0 ? 30 : -30);
              const rotation = scrollPercentage * (index % 2 === 0 ? 10 : -10);
              
              card.style.transform = `translateZ(${(index + 1) * 50}px) translateY(${yMovement}px) translateX(${xMovement}px) rotateY(${rotation}deg)`;
          });
      }
  }
});

// Typed.js-like effect without the library
function createTypingEffect() {
  const typingTexts = document.querySelectorAll('.typing-text');
  
  typingTexts.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      
      let i = 0;
      const typingInterval = setInterval(() => {
          if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
          } else {
              clearInterval(typingInterval);
              
              // Add blinking cursor effect
              element.classList.add('typing-done');
          }
      }, 100);
  });
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
  // Delay to sync with hero animation
  setTimeout(() => {
      createTypingEffect();
  }, 1000);
});

// Scroll triggering for reveal effect on page sections
document.addEventListener('DOMContentLoaded', () => {
  const pageSections = document.querySelectorAll('.section');
  
  if (pageSections.length > 0) {
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };
      
      const sectionObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('section-revealed');
                  
                  // Special effects for specific sections
                  if (entry.target.id === 'skills') {
                      setTimeout(() => {
                          animateProgressBars();
                      }, 500);
                  }
                  
                  // Unobserve after animation
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);
      
      pageSections.forEach(section => {
          sectionObserver.observe(section);
      });
  }
});

// Easter egg - Konami code
let konamiIndex = 0;
const konamiCode = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      
      if (konamiIndex === konamiCode.length) {
          activateEasterEgg();
          konamiIndex = 0;
      }
  } else {
      konamiIndex = 0;
  }
});

function activateEasterEgg() {
  // Matrix-like falling code effect
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '9998';
  canvas.style.pointerEvents = 'none';
  canvas.style.opacity = '0.8';
  document.body.appendChild(canvas);
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const ctx = canvas.getContext('2d');
  
  // Matrix rain characters
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>/?~`';
  
  // Columns - divided by font size
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  
  // Array of drops - one per column
  const drops = [];
  
  // Initialize drops
  for (let i = 0; i < columns; i++) {
      drops[i] = 1;
  }
  
  // Draw the characters
  function draw() {
      // Black translucent background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text color
      ctx.fillStyle = '#0ff0fc';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
          // Random character
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          
          // x = i * font size, y = drops[i] * font size
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          // Randomly reset drops to top after reaching bottom
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
          }
          
          // Increment drop position
          drops[i]++;
      }
  }
  
  // Animation loop
  const matrixInterval = setInterval(draw, 33);
  
  // Remove after 10 seconds
  setTimeout(() => {
      clearInterval(matrixInterval);
      canvas.remove();
  }, 10000);
}

// Check if device supports touch events
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

// Disable custom cursor on touch devices
if (isTouchDevice()) {
  if (cursor) cursor.style.display = 'none';
  if (cursorFollower) cursorFollower.style.display = 'none';
  document.body.style.cursor = 'auto';
}

// Add page loading progress bar
function createPageLoadingBar() {
  const loadingBar = document.createElement('div');
  loadingBar.className = 'page-loading-bar';
  loadingBar.style.position = 'fixed';
  loadingBar.style.top = '0';
  loadingBar.style.left = '0';
  loadingBar.style.height = '3px';
  loadingBar.style.width = '0%';
  loadingBar.style.background = 'var(--accent-primary)';
  loadingBar.style.zIndex = '9999';
  loadingBar.style.transition = 'width 0.2s ease';
  document.body.appendChild(loadingBar);
  
  let width = 0;
  const interval = setInterval(() => {
      if (width >= 90) {
          clearInterval(interval);
      } else {
          width += Math.floor(Math.random() * 10) + 1;
          loadingBar.style.width = width + '%';
      }
  }, 200);
  
  window.addEventListener('load', () => {
      loadingBar.style.width = '100%';
      
      setTimeout(() => {
          loadingBar.style.opacity = '0';
          
          setTimeout(() => {
              loadingBar.remove();
          }, 300);
      }, 500);
  });
}

// Initialize page loading bar on page load
createPageLoadingBar();

// Initialize parallax effect for background elements
function initParallaxBackground() {
  const parallaxBgs = document.querySelectorAll('.parallax-bg');
  
  if (parallaxBgs.length > 0) {
      window.addEventListener('mousemove', (e) => {
          const mouseX = e.clientX / window.innerWidth - 0.5;
          const mouseY = e.clientY / window.innerHeight - 0.5;
          
          parallaxBgs.forEach(bg => {
              const strength = parseFloat(bg.getAttribute('data-strength') || 20);
              
              bg.style.transform = `translate(${mouseX * strength}px, ${mouseY * strength}px)`;
          });
      });
  }
}

// Initialize parallax background effect
initParallaxBackground();

// Function to handle page visibility changes
function handleVisibilityChange() {
  if (document.hidden) {
      // Page is hidden (user switched tabs, minimized window, etc)
      document.title = "Come back! 👋";
  } else {
      // Page is visible again
      document.title = "Alex Miller | Software Engineer";
      
      // Add welcome back animation
      const body = document.querySelector('body');
      body.classList.add('welcome-back');
      
      setTimeout(() => {
          body.classList.remove('welcome-back');
      }, 1000);
  }
}

// Listen for visibility change events
document.addEventListener('visibilitychange', handleVisibilityChange);

// Detect and warn about outdated browsers
function detectOutdatedBrowser() {
  const isIE = !!document.documentMode;
  const isEdgeHTML = !isIE && !!window.StyleMedia;
  
  if (isIE || isEdgeHTML) {
      const warning = document.createElement('div');
      warning.className = 'browser-warning';
      warning.style.position = 'fixed';
      warning.style.top = '0';
      warning.style.left = '0';
      warning.style.width = '100%';
      warning.style.padding = '10px';
      warning.style.backgroundColor = '#ff5555';
      warning.style.color = 'white';
      warning.style.textAlign = 'center';
      warning.style.zIndex = '9999';
      warning.innerHTML = 'You are using an outdated browser. Please use a modern browser like Chrome, Firefox, or Edge for the best experience.';
      
      document.body.appendChild(warning);
  }
}

// Check for outdated browsers on page load
detectOutdatedBrowser();

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initial animations for hero section
  heroElements.forEach((element, index) => {
      setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }, 200 * index);
  });
  
  // Start animated background
  if (typeof particlesJS !== 'undefined' && document.getElementById('hero-particles')) {
      particlesJS('hero-particles', {
          // Configuration already defined in the initialization section
      });
  }
  
  // Initialize 3D effect for floating cards
  if (typeof $ !== 'undefined') {
      if ($('[data-tilt]').length) {
          $('[data-tilt]').tilt({
              // Configuration already defined in the initialization section
          });
      }
  }
});
