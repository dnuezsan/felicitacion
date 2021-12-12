'use strict'

window.onload = iniciar

function iniciar() {


    //controlPeli()

    robot.style.visibility = 'hidden'

    musicaTrigger()

    peli()

    fabricación()

}

//Musica

function musicaTrigger() {
    let control = false
    //let partituras = document.getElementById('parti')

    parti.ondragstart = () => {
        asha.ondragover = (a) => {
            a.preventDefault()
            console.log('dfgfdg');
        }
        asha.addEventListener('drop', function (a) {
            a.preventDefault()
            if (control == false) {
                musica()
                control = true
            }
        })
    }
}

function musica() {

    let num = Math.floor(Math.random() * 3)
    let canciones = ['recursos/canciones/canon.mp3', 'recursos/canciones/condor.mp3', 'recursos/canciones/wicked.mp3', 'recursos/canciones/saints.mp3']
    let cancion = new Audio(canciones[num])
    cancion.play()
}


//Pelicula

function controlPeli() {
    let video = document.createElement('video')
    central.appendChild(video)
    video.style.position = 'absolute'
    video.style.width = '75%'
    video.style.height = '60%'
    video.style.right = '12%'
    video.style.top = '27%'
}


function peli() {
    //let cam = document.getElementById('cam')
    cam.ondragstart = () => {
        asha.ondragover = (a) => {
            a.preventDefault()
            console.log('ya');
        }
        asha.addEventListener('drop', (a) => {
            a.preventDefault()
            //TERMINAR
        })
    }
}

//Creacion del robot

function fabricación() {
    let robotear = new Audio('recursos/canciones/robot.mp3')
    let control = false
    destor.ondragstart = () => {
        asha.ondragover = (a) => {
            a.preventDefault()
            console.log('robot');
        }
        asha.addEventListener('drop', (a) => {
            a.preventDefault()
            if (control == false) {
                robotear.play()
                control = true
                setTimeout(() => {
                    robot.style.visibility = 'visible'
                }, 2500)
            }

        })
    }

}