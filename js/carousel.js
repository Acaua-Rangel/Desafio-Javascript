class Carousel {
    image;
    title;
    url;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
}

class Logic {
    constructor(images, interval = 2000) {
        this.images = images;
        this.index = 0;
        this.intervalTime = interval;
        this.timer = null;

        // Elementos do carrossel
        this.imageElement = document.getElementById("carouselImage");
        this.titleElement = document.getElementById("carouselTitle");
        this.linkElement = document.getElementById("carouselLink");

        // Botões
        this.prevBtn = document.getElementById("prevBtn");
        this.nextBtn = document.getElementById("nextBtn");

        // Eventos
        this.prevBtn.addEventListener("click", () => this.back());
        this.nextBtn.addEventListener("click", () => this.next());

        // Inicia o carrossel
        this.updateCarousel();
        this.startAutoSlide();
    }

    updateCarousel() {
        const currentItem = this.images[this.index];

        // Atualiza imagem, título e link
        this.imageElement.src = currentItem.image;
        this.imageElement.alt = currentItem.title;
        this.titleElement.textContent = currentItem.title;
        this.linkElement.href = currentItem.url;
    }

    next() {
        this.index = (this.index + 1) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    back() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    startAutoSlide() {
        this.timer = setInterval(() => this.next(), this.intervalTime);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.startAutoSlide();
    }
}

// Dados do carrossel
const images = [
    new Carousel("img/imagem_1.jpg", "Esta é a nova Ranger Ford 2022", "lancamento.html"),
    new Carousel("img/imagem_2.jpg", "Ford a nossa história", "#"),
    new Carousel("img/imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"),
]

// Inicializa o carrossel quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    new Logic(images);
});