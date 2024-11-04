let currentSlide = 1;
const totalSlides = 5; // Número total de slides

// Iniciar o slider automaticamente ao carregar a página
startSlider();

function startSlider() {
    setInterval(function () {
        nextSlide();
    }, 2000); // Define o intervalo de tempo entre as trocas (2 segundos)
}

function nextSlide() {
    currentSlide++;
    
    // Reiniciar para o primeiro slide após o último
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    showSlide(currentSlide);
}

function showSlide(index) {
    // Desmarcar todas as rádio-buttons
    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById("radio" + i).checked = false;
    }

    // Marcar a rádio-button correspondente à imagem atual
    document.getElementById("radio" + index).checked = true;
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons8-menu (1).svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icons8-close.svg";
    }
}