document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const hoverElements = document.querySelectorAll('.hover-link, button, a');

    // Update cursor position smoothly
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation loop for smooth cursor
    function animateCursor() {
        let dx = mouseX - cursorX;
        let dy = mouseY - cursorY;
        
        cursorX += dx * 0.2;
        cursorY += dy * 0.2;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // Handle cursor leaving the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    // Split text for hero animation
    const splitTexts = document.querySelectorAll('.split-text');
    splitTexts.forEach(text => {
        const chars = text.innerText.split('');
        text.innerHTML = '';
        chars.forEach((char, i) => {
            const span = document.createElement('span');
            // Preserve space characters
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.classList.add('char');
            span.style.transitionDelay = `${i * 0.05}s`;
            text.appendChild(span);
        });
    });

    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('.reveal-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Trigger hero animation immediately
    setTimeout(() => {
        document.querySelector('.hero').classList.add('active');
    }, 100);
});
