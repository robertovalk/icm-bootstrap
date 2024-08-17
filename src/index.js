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

const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = document.querySelectorAll('.carousel-img');
const modal = document.getElementById('fullscreen-modal');
const modalImg = document.getElementById('fullscreen-image');
const closeBtn = document.querySelector('.close');
const imageWidth = images[0].clientWidth;

let currentIndex = 0;

rightArrow.addEventListener('click', () => {
  if (currentIndex < images.length - 5) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

