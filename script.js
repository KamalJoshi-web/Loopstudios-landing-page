const menuBtn =document.getElementById('menu-btn');
const logo= document.getElementById('logo');
const links =document.querySelector('.links');

menuBtn.addEventListener('click',()=>{
    links.classList.toggle('links-active');
    if(links.classList.contains('links-active')){
        logo.classList.add('logo-active');
        menuBtn.src='./images/icon-close.svg';
    }
    else{
        logo.classList.remove('logo-active');
        menuBtn.src='./images/icon-hamburger.svg';
    }
})