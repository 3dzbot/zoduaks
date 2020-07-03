import scrollPage from "./modules/scrollPage";
import swiperPage from "./modules/swiperPage";
import accordion from "./modules/accordeon";
import images from "./modules/images";
import inputValidation from "./modules/validator"
import backgroundTree from "./modules/backgroundTree"
import sendAjax from "./modules/ajax";
import detectBrovser from "./modules/detectBrovser";
import newPollifil from "./modules/newPolifil";
import 'whatwg-fetch';
// import svgPath from "./modules/svgpath";

window.addEventListener('DOMContentLoaded', ()=> {
    "use strict";
    const preload = document.querySelector('.preloader');

    let version =  detectBrovser();
    newPollifil(version);
    preload.remove();
    scrollPage();
    swiperPage();
    accordion();
    images();
    inputValidation();
    backgroundTree(version);
    sendAjax();
    // svgPath();
    // setInterval(()=>{
    //     const jivosite = document.createElement('script');
    //     jivosite.src = '//code-ya.jivosite.com/widget/rCzFvFrEOd';
    //     document.body.appendChild(jivosite);
    // }, 3000);
});