// Эффект падающих звезд/частиц
const canvas = document.getElementById('c');
let ctx = canvas.getContext('2d');
let particles = [];
let animationId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    const particleCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 15000));
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            v: Math.random() * 0.6 + 0.2,
            r: Math.random() * 2 + 1
        });
    }
}

function animateParticles() {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    
    particles.forEach(p => {
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        
        p.y -= p.v;
        if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }
    });
    
    animationId = requestAnimationFrame(animateParticles);
}

function startParticles() {
    if (canvas) {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        window.addEventListener('resize', () => {
            resizeCanvas();
        });
        animateParticles();
    }
}

// Автозапуск
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startParticles);
} else {
    startParticles();
}
