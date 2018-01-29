'use strict';

function carouselInit() {

    var sliderContainer = document.querySelector('.main_banner_section'),
        slides = [].slice.call(document.querySelectorAll('.slide_item')),
        currentSlide = sliderContainer.querySelector('.active_slide'),
        activeDot = document.querySelector('.switch_item.active'),
        counter = 0;

    function nextSlide() {
        var nextIndex = +currentSlide.dataset.index + 1;
        if (nextIndex < slides.length) {
            setSlide(nextIndex);
        } else {
            setSlide(0)
        }
    }

    function prevSlide() {
        var prevIndex = +currentSlide.dataset.index - 1;
        if (prevIndex >= 0) {
            setSlide(prevIndex);
            counter = 0;
        } else {
            setSlide(slides.length - 1);
            counter = 0;
        }
    }

    function selectDot(dotIndex) {
        var selectedDot = document.querySelector('.switch_item[data-index="' + dotIndex + '"]');
        activeDot.classList.remove('active');
        selectedDot.classList.add('active');
        activeDot = selectedDot;
    }

    function setSlide(slideIndex) {

        var selectedSlide = sliderContainer.querySelector('.slide_item[data-index="' + slideIndex + '"]');

        if (selectedSlide != null) {
            currentSlide.classList.remove('active_slide');
            selectedSlide.classList.add('active_slide');
            currentSlide = selectedSlide;
            counter = 0;
            selectDot(slideIndex);

            return currentSlide

        } else return currentSlide;
    }

    function carouselStart() {
        setInterval(function () {
            counter++;
            if (counter == 10) {
                nextSlide();
            }
        }, 1000);

    }

    return {
        nextSlide : nextSlide,
        prevSlide : prevSlide,
        setSlide : setSlide,
        carouselStart : carouselStart
    }
}

var carousel = carouselInit();
carousel.carouselStart();

// LISTENERS

var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');
var switcher = document.querySelector('.slide_switch');

nextButton.addEventListener('click', carousel.nextSlide);
prevButton.addEventListener('click', carousel.prevSlide);

switcher.addEventListener('click', function (e) {
    var item = e.target;

    if (item.classList.contains('switch_item')) {
        item.classList.add('active');
        carousel.setSlide(item.dataset.index);
    };
});

