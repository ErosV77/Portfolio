document.addEventListener('DOMContentLoaded', function () {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});

// Fonction pour appliquer des styles CSS aux images dans les slides
function applyImageStyles() {
    const images = document.querySelectorAll('.swiper-slide img');
    
    images.forEach(img => {
        img.style.userSelect = 'none'; // Empêche la sélection de l'image
        img.style.webkitUserSelect = 'none'; // Pour les navigateurs WebKit
        img.style.mozUserSelect = 'none'; // Pour Firefox
        img.style.msUserSelect = 'none'; // Pour Internet Explorer/Edge
    });
}

// Initialiser Swiper
document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            },
            init() {
                applyImageStyles(); // Appliquer les styles aux images après l'initialisation de Swiper
            }
        }
    });
});