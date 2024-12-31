/* Affiage du nom avec animation */
const txtAnim = document.querySelector('span');

new Typewriter(txtAnim,
    {
        deleteSpeed: 20
    })
.changeDelay(260)
.typeString('<span class="highlight">Julien Henry</span>')
.pauseFor(3000)
.start()

/* Menu Burger */

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});
