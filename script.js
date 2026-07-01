// Initialize Typed.js to create the typing animation in the hero.
// Target: element with class `.text` inside the hero heading.
// Options:
//  - strings: array of strings Typed.js will type (you can add more roles here)
//  - typeSpeed/backSpeed: typing and deletion speed in ms
//  - backDelay: pause before deleting the typed string
//  - loop: whether to repeat the animation indefinitely
var typed = new Typed(".text", {
   strings: [" Fresher"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true,
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reset and re-animate technical skills on scroll
function resetTechnicalSkills() {
    const spans = document.querySelectorAll('.technical-bars .bar .progress-line span');
    spans.forEach(span => {
        span.style.animation = 'none';
        span.offsetHeight; // Trigger reflow
        const parentClass = span.parentElement.className;
        if (parentClass.includes('html')) {
            span.style.animation = 'animateHtml 1s ease forwards 0.5s';
        } else if (parentClass.includes('css')) {
            span.style.animation = 'animateCss 1s ease forwards 0.7s';
        } else if (parentClass.includes('javascript')) {
            span.style.animation = 'animateJs 1s ease forwards 0.9s';
        } else if (parentClass.includes('sql')) {
            span.style.animation = 'animateSql 1s ease forwards 1.1s';
        }
    });
}

// Initialize animations on load
window.addEventListener('load', function() {
    resetTechnicalSkills();
});

function animateProfessionalSkills() {
    const radialBars = document.querySelectorAll('.radial-bars');
    radialBars.forEach(function(bar) {
        const percentText = bar.querySelector('.percentage')?.textContent?.trim() || '0%';
        const percent = parseInt(percentText.replace('%', ''), 10);
        const circle = bar.querySelector('.path');
        if (!circle || isNaN(percent)) return;

        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        requestAnimationFrame(function() {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        });
    });
}

document.addEventListener('DOMContentLoaded', animateProfessionalSkills);