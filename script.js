<script>
        // Create Particles
        const particlesContainer = document.getElementById('particles');
        const particleCount = 60;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = 20 + Math.random() * 15 + 's';
            
            // Random colors
            const colors = ['rgba(139, 92, 246, 0.6)', 'rgba(59, 130, 246, 0.6)', 'rgba(6, 182, 212, 0.6)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }

        // Parallax Effect on Mouse Move
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;

            const orbs = document.querySelectorAll('.orb');
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 15;
                orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
            });

            const card = document.querySelector('.glass-card');
            card.style.transform = `rotateY(${mouseX * 8}deg) rotateX(${-mouseY * 8}deg)`;
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.8)';
                nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.4)';
                nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            }
        });
    </script>