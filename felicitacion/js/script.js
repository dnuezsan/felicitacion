'use strict'

window.onload = iniciar

function iniciar() {

    let partituras = document.getElementById('parti')
    let camara = document.getElementById('cam')
    let destornillador = document.getElementById('destor')
    let robot = document.getElementById('robot')
    let asha = document.getElementById('asha')

    asha.ondragover = (a) => {
        a.preventDefault()
    };

    asha.addEventListener('drop', function (a) {
        a.preventDefault()
        console.log('lkok');
    })


}

function Musica() {
    let central = document.getElementById('central')

    let num = Math.floor(Math.random() * 3)
    let canciones = ['recursos/canciones/canon.mp3', 'recursos/canciones/condor.mp3', 'recursos/canciones/wicked.mp3', 'recursos/canciones/saints.mp3']
    let cancion = new Audio(canciones[num])
    central.onclick = () => {
        if (!cancion.onplaying) {
            cancion.play()
        } else {
            cancion.pause()
        }
    }
}


/* function musica() {
    //genera número aleatorio
    //let num = Math.floor(Math.random() * (4 + 1)) + 1
    //let canciones = ['recursos/canciones/canon.mp3', 'recursos/canciones/condor.mp3', 'recursos/canciones/wicked.mp3', 'recursos/canciones/saints.mp3']
    //evento.
    if (cancion) {

    }
    //let cancion = new Audio(canciones[num])

} */

function peli() {

}

function fabriación() {

}