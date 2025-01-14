let slideIndex = 0;

function openCarousel(index) {
    slideIndex = index;
    document.getElementById('carousel').style.display = 'flex';
    showSlide(slideIndex);
}

function closeCarousel() {
    document.getElementById('carousel').style.display = 'none';
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-inner img');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}
