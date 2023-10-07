$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    touchDrag: true,
    mouseDrag: true,


    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 3,
            margin: 5
        },
        1000: {
            items: 5
        }
    }
})