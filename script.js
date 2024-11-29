const menuIcon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const returnkey = document.querySelector('#return');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
    returnkey.classLust.toggle('index.html')
}