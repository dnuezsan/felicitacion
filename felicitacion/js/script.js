'use strict'

window.onload = iniciar

function iniciar() {


    //controlPeli()
        let izquierda = document.getElementById('pagIzquierda')
        let central = document.createElement('p')
        izquierda.appendChild(central)
        central.textContent = 'PULSA AQUÍ'
        central.style.margin = '0 auto'
        central.style.width = 'fit-content'
        central.style.fontSize = '2.5rem'
        central.style.marginTop = '48%'
        central.style.textAlign= 'center'
        pagDerecha.style.visibility = 'hidden'
        
    escribir()

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

//Texto


function escritura(entrada) {
    let texto = entrada.split('')
    let i = 0
    pagIzquierda.textContent = ''
    let escritor = setInterval(() => {
        pagIzquierda.append(texto[i])
        i++
        if (i == texto.length) {
            clearInterval(escritor)
        }
    }, 10)


}

function escribir() {
    let i = 0
    let array = [parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, parrafo6, parrafo7, parrafo8]
    pagIzquierda.onclick = () => {
        escritura(array[i])
        i++
        if (i == 4) {
            pagDerecha.style.visibility = 'visible'
        }
    }
}


let parrafo1 = `Hace mucho, mucho tiempo; en una tierra lejana nació un niño especial. Antiguas profecías hablaban de que ese niño traería el reino de Dios a los hombres, y tres
grandes reyes magos de oriente guiados por una estrella vinieron a recibirlo con tres obsequios: oro incieso y mirra.`

let parrafo2 = `El niño creció y realizó obras y prodigios que cambiaron el mundo
para siempre, dejándonos un legado espiritual basado en el amor a Dios y al prójimo que se extiende hasta nuestros días.`

let parrafo3 = `Hoy el mundo cuenta con grandes avances tecnológicos. El progreso
trajo medios para reducir el hambre y la escasez, comunicar el mundo y mejorar la calidad de vida de las personas. Sin embargo, no es suficiente y muchos sufren pobreza y desigualdad.
Pero no os desanimeis, aun hay algo que se puede hacer.`

let parrafo4 = `Os presento a Asha.`

let parrafo5 = `Ella es una niña de 8 años que vive en una aldea de la India. A Asha le gusta jugar con otros niños, cuidar los animales de su familia y ayudar a 
su abuela a cocinar. Pero lo que más le gusta es ir a la escuela. Allí no solo aprende a leer y escribir. A través de sus maestros aprende que el mundo es muy grande e imagina
todos los lugares que le gustaría conocer. También le gusta descrifrar los secretos de las matemáticas (ya ha evitado que engañen a sus padres 2 veces en el mercadillo).`

let parrafo6 = `Asha cree que si aprende más, un día podrá mejorar la vida de las personas, pero sus padres no tienen medios para pagar su educación.`

let parrafo7 = `Ella tiene grandes sueños como ser una gran compositora, hacer robots, rodar películas... ¿Por qué no la ayudas? `

let parrafo8 = `Recuerda al niño de la historia ¿Imaginas que todos tuvieran la oportunidad de desarrollar su potencial? Atrévete a dejarles soñar, para que algún día den fruto.`