const sendAjax = ()=>{

    const form = document.querySelector('form');

    function sendMessage(e) {
        e.preventDefault();
        const formData = new FormData(form);
        sendToTelegram(formData);
        this.reset();
    }

    function sendToTelegram(formData){
        fetch('assets/telegram.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            closeModalAfterSend(response.ok)
        })
        .catch(error => {
            closeModalAfterSend(false, error)
        });
    }

    function closeModalAfterSend(response = true, error) {
        const modalCart = document.createElement('div');
        modalCart.classList.add('popup');
        if(response){
            modalCart.innerHTML = `<h2>Спасибо</h2>`;
        } else {
            modalCart.innerHTML = `<h2 style="color: red;">Ой, что-то пошло не так! :(</h2>`;
            console.warn(error);
        }
        document.body.insertAdjacentElement('beforeend', modalCart);

        setTimeout(()=>{
            modalCart.remove();
        }, 1100)
    }

    form.addEventListener('submit', sendMessage);
};

export default sendAjax;



