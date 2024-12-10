let indexslide = 0

function showSlide(index){
    const totalSlide = document.querySelectorAll('.carrossel img').length;
    const carrossel = document.querySelector('.carrossel');

    if (index >= totalSlide){
        indexslide = 0
        index = indexslide
    } else if (index < 0){
        indexSlide = totalSlide -1;
        index = indexslide;
    }
    const offset = index * -100

carrossel.style.transform = `translateX(${offset}%)`
}

function prevSlide(){
    indexslide = indexslide - 1
    showSlide(indexslide)
}

function nextSlide(){
    indexslide = indexslide + 1
    showSlide(indexslide)
}