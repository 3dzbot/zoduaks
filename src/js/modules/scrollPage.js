const scrollPage = () => {

    const btnTop = document.querySelector('.btn-top');
    let winScroll = window.pageYOffset;

    //show btn goTop
    window.addEventListener('scroll', ()=>{
        winScroll = window.pageYOffset;
        if ((document.documentElement.clientHeight+300) <= winScroll){
            btnTop.style.display = 'block';
        } else if(document.documentElement.clientHeight+300 > winScroll){
            btnTop.style.display = '';
        }
    });

    function slowScroll(anchorsSelector, trigger = false, mobileBtn, parentWrapper) {
        const anchors = document.querySelectorAll(anchorsSelector);

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const blockID = anchor.getAttribute('href').substr(1);

                if (trigger) {
                    mobileBtn.classList.remove('menu-btn-active');
                    parentWrapper.style.left = '';
                    parentWrapper.style.opacity = '';
                    document.body.style.overflow = '';
                }

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    slowScroll('.nav a[href*="#"]');
    slowScroll('a.btn-top[href*="#"]');
};

export default scrollPage;