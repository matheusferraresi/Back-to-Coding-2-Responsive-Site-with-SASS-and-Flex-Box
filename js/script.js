document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');

    
    //Hamburger menu toggle
    navToggle.addEventListener('click', (event) => {
        mainNav.classList.toggle('is-open');
        hamburger.classList.toggle('is-open');
    });

});