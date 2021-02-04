    const mobileBtnOpen = document.getElementById('mobile-cta') 
    nav = document.querySelector('nav') 
    mobileBtnExit = document.getElementById('mobile-exit');
    
    console.log(mobileBtnOpen, nav, mobileBtnExit);

    mobileBtnOpen.addEventListener('click', () => {
        nav.classList.add('menu-btn');
    }); 

    mobileBtnExit.addEventListener('click', () => {
        nav.classList.remove('menu-btn');
    }); 


    
    /* .querySelector('logo');
console.log(btnOpenMenu);  */