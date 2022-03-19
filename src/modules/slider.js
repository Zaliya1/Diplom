const slider = () => {
    const swiper = new Swiper('.benefits-inner', {
        slidesPerView: "auto",
        centeredSlides: false,
        centeredSlidesBounds: true,
        spaceBetween: 25,
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
      });
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.style.height = "70%";
};
export default slider;