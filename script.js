document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Função para rolar o slider
    function scrollSlider(direction) {
        const itemWidth = document.querySelector('.produto-item').offsetWidth;
        const scrollAmount = itemWidth * 2; // Rola dois itens por clique (ajuste conforme quiser)

        if (direction === 'next') {
            sliderContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth' // Rolagem suave
            });
        } else {
            sliderContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    // Adiciona event listeners aos botões
    if (prevBtn) {
        prevBtn.addEventListener('click', () => scrollSlider('prev'));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => scrollSlider('next'));
    }

});

const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;

    function showSlide(i) {
        index = (i + images.length) % images.length;
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));
    