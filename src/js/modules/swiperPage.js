const swiperPage = () => {
    //swiper
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        // initialSlide: 1,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

export default swiperPage;