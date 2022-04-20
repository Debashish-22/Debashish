AOS.init({
    once: true
});

const close = document.querySelector('.close');
const open = document.querySelector('.open');
const sidebar = document.querySelector('.sidebar');

close.addEventListener('click', ()=>{

    sidebar.style.width= '0px'
})

open.addEventListener('click', ()=>{

    sidebar.style.width= '33rem'
})

$(document).ready(()=>{
    $('.home-content').animate({opacity: 1}, 2500);
})



