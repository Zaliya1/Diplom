import Swiper from 'swiper/bundle';
const sliders = () => {
    const swiperSirvice = new Swiper('.row1', {
      navigation: {
        nextEl: '.services__arrow--right',
        prevEl: '.services__arrow--left',
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 10,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
            rows: 2,
            fill: 'row'
          }
        },
      }
  
    });
  
  }
  
  export default sliders