const nav = document.querySelector('.header__inner') 
const navToggle = document.querySelector('.navTuggle') 
 
navToggle.addEventListener('click', function () { 
  nav.classList.toggle('header__show') 
}) 
 
 
document.addEventListener('DOMContentLoaded', function () { 
 
  let slider1 = document.querySelector('.home-slider'); 
  if (slider1) { 
    new Swiper(slider1, { 
 
      pagination: { 
        el: '.home-pagination', 
      }, 
 
      grabCursor: true, 
      effect: "creative", 
      creativeEffect: { 
        prev: { 
          shadow: true, 
          translate: [0, 0, -800], 
          rotate: [180, 0, 0], 
        }, 
        next: { 
          shadow: true, 
          translate: [0, 0, -800], 
          rotate: [-180, 0, 0], 
        }, 
      }, 
 
      loop: true, 
    }) 
  } 
 
  let slider2 = document.querySelector('.galary-swiper'); 
  if (slider2) { 
 
    new Swiper(slider2, { 
      slidesPerView: 10, 
      slidesPerGroup: 10, 
      spaceBetween: 18, 
      pagination: { 
        el: ".galary-pagination", 
      }, 
    }) 
  } 
 
}); 
 
let mixer = mixitup('.gallery__inner', { 
  load: { 
    filter: '.bedroom' 
  } 
});