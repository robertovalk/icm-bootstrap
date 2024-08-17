document.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.js-carousel'), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 768,
                settings: {
                    slidesToShow: '3',
                    slidesToScroll: '1',
                    itemWidth: 150,
                    duration: 0.25
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    itemWidth: 349,
                    duration: 0.25
                }
            }
        ]
    });
});



