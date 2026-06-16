// Premium Portfolio Interactivity Setup

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Navigation Bar Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            
            // Minimal Animation for Mobile Burger Bar State
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            bars[0].style.transform = navLinksContainer.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 5px)' : 'none';
            bars[1].style.opacity = navLinksContainer.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = navLinksContainer.classList.contains('active') ? 'rotate(45deg) translate(-5px, -5px)' : 'none';
        });
    }

    // 2. Smooth Scroll Anchor Target Links Adjuster
    const localAnchors = document.querySelectorAll('a[href^="#"]');
    localAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active responsive drop navigation menu on jump selection
                if(navLinksContainer.classList.contains('active')) {
                    mobileMenuBtn.click();
                }

                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Buffer offsetting fix for the sticky dynamic header bar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Elegant Sticky Scroll Header Optimization Effects
    const dynamicHeader = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            dynamicHeader.style.padding = '0.75rem 2rem';
            dynamicHeader.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
        } else {
            dynamicHeader.style.padding = '1.25rem 2rem';
            dynamicHeader.style.boxShadow = 'none';
        }
    });

    // 4. Submission Handling Simulation for Leads
    const interactionForm = document.getElementById('portfolio-form');
    if (interactionForm) {
        interactionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = interactionForm.querySelector('button[type="submit"]');
            
            // Visual premium response indication feedback loop change state
            submitBtn.innerText = 'Transmission Successful...';
            submitBtn.style.background = '#F3E5AB';
            submitBtn.style.color = '#0D0C0A';
            
            setTimeout(() => {
                interactionForm.reset();
                submitBtn.innerText = 'Dispatch Brief';
                submitBtn.style.background = '#D4AF37';
                submitBtn.style.color = '#0D0C0A';
            }, 3500);
        });
    }
});