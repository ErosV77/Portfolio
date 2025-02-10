document.addEventListener('DOMContentLoaded', function () {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data; // Load navigation HTML
        });

    // Disable right-click on images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    });
});

// Function to apply CSS styles to images in slides
function applyImageStyles() {
    const images = document.querySelectorAll('.swiper-slide img');
    
    images.forEach(img => {
        img.style.userSelect = 'none'; // Prevent image selection
    });
}

// Initialize Swiper
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
                applyImageStyles(); // Apply styles to images after Swiper initialization
            }
        }
    });
});