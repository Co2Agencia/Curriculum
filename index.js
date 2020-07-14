var botonIdiomas = gsap.timeline({duration:0.4, paused:true, ease: "power4.easeIn"})

botonIdiomas.to('#bala-boton', {
    x:"2.4rem"
})
.to('.curriculum-espanol1', {
    display: "none",
})
.to('.curriculum-ingles1', {
    display: "block",
})

document.getElementById('bala-boton').addEventListener('click', () => {
    botonIdiomas.paused() ? botonIdiomas.play() : botonIdiomas.reversed() ? botonIdiomas.play() : botonIdiomas.reverse();
})