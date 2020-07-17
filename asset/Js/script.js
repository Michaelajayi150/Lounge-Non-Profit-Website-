const navToggle = document.querySelector('.nav-toggler');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links');
    navToggle.classList.toggle('show-icon');
})