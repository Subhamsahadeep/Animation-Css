const menuBurger = document.querySelector('.menu-btn');
let openMenuBar = false;
menuBurger.addEventListener('click',() => {
    if(!openMenuBar){
        menuBurger.classList.add('open');
        openMenuBar = true;
    }
    else{
        menuBurger.classList.remove('open');
        openMenuBar = false;
    }
});