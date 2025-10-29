// Animated Favicon
(function() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    let angle = 0;
    const centerX = 32;
    const centerY = 32;
    
    function drawGear() {
        ctx.clearRect(0, 0, 64, 64);
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        ctx.translate(-centerX, -centerY);
        
        // Gradiente laranja
        const gradient = ctx.createLinearGradient(0, 0, 64, 64);
        gradient.addColorStop(0, '#FF6B35');
        gradient.addColorStop(1, '#F7931E');
        
        // Desenhar 8 dentes (círculos ao redor)
        const teeth = 8;
        const radius = 24;
        for (let i = 0; i < teeth; i++) {
            const teethAngle = (i * 2 * Math.PI) / teeth;
            const x = centerX + radius * Math.cos(teethAngle);
            const y = centerY + radius * Math.sin(teethAngle);
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        
        // Círculo externo
        ctx.beginPath();
        ctx.arc(centerX, centerY, 22, 0, 2 * Math.PI);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Círculo médio translúcido
        ctx.beginPath();
        ctx.arc(centerX, centerY, 16, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 107, 53, 0.3)';
        ctx.fill();
        
        ctx.restore();
        
        // Centro fixo (não gira)
        ctx.beginPath();
        ctx.arc(centerX, centerY, 9, 0, 2 * Math.PI);
        ctx.fillStyle = '#1a1a1a';
        ctx.fill();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
    
    function updateFavicon() {
        drawGear();
        
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL('image/png');
        
        if (!document.querySelector("link[rel*='icon']")) {
            document.head.appendChild(link);
        }
        
        angle += 0.05;
        requestAnimationFrame(updateFavicon);
    }
    
    // Iniciar animação quando a página carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateFavicon);
    } else {
        updateFavicon();
    }
})();
