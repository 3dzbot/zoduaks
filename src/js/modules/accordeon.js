const accordion = () =>{
    let acc = document.querySelectorAll(".btn-accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active-acc");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                console.log(event.target.matches);
                console.log(event.target.msMatchesSelector);
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
};

export default accordion;