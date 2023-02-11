const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click',function () {
    this.classList.toggle('active');
    mobile_menu.classList.toggle('open'); 
});