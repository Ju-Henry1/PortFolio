const txtAnim = document.querySelector('span');

new Typewriter(txtAnim,
    {
        deleteSpeed: 20
    })
.changeDelay(260)
.typeString('<span class="highlight">Julien Henry</span>')
.pauseFor(3000)
.start()