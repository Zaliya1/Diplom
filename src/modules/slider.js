const slider = () => {
    let swiperClients = new Swiper('.benefits-inner', {
        slidesPerView: "auto",
        centeredSlides: false,
        centeredSlidesBounds: true,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
    });
    const benefitsWrap = document.querySelector('.benefits-wrap');
    benefitsWrap.style.height = "70%";
    
    let swiperServices = new Swiper('.row1', {
        slidesPerView: "auto",
        centeredSlides: false,
        centeredSlidesBounds: true,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        navigation: {
            nextEl: '.services__arrow--right',
            prevEl: '.services__arrow--left',
        },
    });
};
export default slider;