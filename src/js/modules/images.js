const images = () => {

    //Polyfill for matches
    (function() {

        // проверяем поддержку matches
        if (!Element.prototype.matches) {

            // определяем свойство
            Element.prototype.matches = Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector;

        }

    })();

    const workSection = document.querySelector('.img-accordion');

    workSection.addEventListener('click', (e)=>{
        e.preventDefault();

        let target = e.target;
        if(target && target.classList.contains('preview')){

            const imgPopup = document.createElement('div'),
            bigImage = document.createElement('img');

            document.body.appendChild(imgPopup);
            imgPopup.classList.add('popup');
            imgPopup.appendChild(bigImage);

            const path = target.dataset.image;
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';

            imgPopup.addEventListener('click', ()=> {
                imgPopup.remove();
                document.body.style.overflow = 'auto';
            });
        }
    })
};

export default images;