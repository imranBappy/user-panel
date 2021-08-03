(function(){
    "use strict"
    const menu = document.getElementById('menu');
    const maxWrapper = document.getElementById('max-wrapper')
    const sidebar = document.getElementById('sidebar')
    const dashboard = document.getElementById('dashboard');
    menu.addEventListener('click', ()=>{
        const menuName = menu.src;
        if (menuName === 'http://127.0.0.1:5500/assets/img/menu.svg') {
            menu.src = './assets/img/cancel.svg'
            maxWrapper.classList.add('max-wrapper-res');
            sidebar.style.left = '-1000px'
            dashboard.style.left = '0px'
            dashboard.style.padding = '0px 30px'
            if (window.screen.width > 1199) {
                dashboard.style.maxWidth = '1920px'
            }
            if (window.screen.width <= 1199) {
                dashboard.style.maxWidth = '1199px'
            }
        }else{
            menu.src = './assets/img/menu.svg'
            maxWrapper.classList.remove('max-wrapper-res');
            sidebar.style.left = '0px'
            dashboard.style.left = '341px'
            dashboard.style.padding = '0px 0px'

            if (window.screen.width > 1500) {
                dashboard.style.maxWidth = '1579px'
            }
            if (window.screen.width <= 1199) {
                dashboard.style.maxWidth = '858px'
            }
        }
    })










})()