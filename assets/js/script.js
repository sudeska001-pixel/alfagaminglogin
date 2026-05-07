document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(6, 8, 15, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'rgba(6, 8, 15, 0.8)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate stats numbers
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = stat.innerText;
            // Simple animation class addition or just let it be static for now
            // To do proper counter animation, we'd need numeric values without K or %
            stat.style.opacity = '0';
            setTimeout(() => {
                stat.style.transition = 'opacity 1s ease-in, transform 1s ease-out';
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, 300);
        });
    };

    // Trigger stats animation when in viewport
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateStats();
        }
    });
    
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        observer.observe(statsContainer);
    }

    // Modal Logic
    const modal = document.getElementById('welcomeModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    // Show modal after 1.5 seconds of page load
    if (modal) {
        setTimeout(() => {
            modal.classList.add('active');
        }, 1500);
        
        // Close modal when clicking the close button
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }
        
        // Close modal when clicking outside of it
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
