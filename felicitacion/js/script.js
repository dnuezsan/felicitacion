'use strict'

window.onload = iniciar

function iniciar() {


    //controlPeli()

    let prueba = pagIzquierda.textContent = 'HAZ CLICK AQUÍ'

    eleccionParrafo()

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
function escribir(entrada) {
    /* let texto = pagina1.split('')
    let i = 0
    let parrafo = document.createElement('p')
    document.getElementById('pagIzquierda').appendChild(parrafo)
    pagIzquierda.textContent = ''
    setInterval(() => {
       let letra = pagIzquierda.textContent = pagIzquierda.innerHTML + texto[i]
        letra = 'black'
        i++
    }, 50); */

    let texto = entrada.split('')
    let i = 0
    pagIzquierda.textContent = ''
    texto.forEach(element => {
        setInterval(() => {
            let letra = pagIzquierda.textContent = pagIzquierda.innerHTML + element
            i++
        }, 50);
    });

}

function eleccionParrafo() {
    let i = 0
    let array = [prueba1, prueba2]
    pagIzquierda.onclick = () => {
        escribir(array[i])
    }
}

let prueba1 = 'gdfgjrtklñj'
let prueba2 = '22222222222222'

let pagina1 = `Hace mucho, mucho tiempo; en una tierra lejana nació un niño especial. Antiguas profecías hablaban de que ese niño traería el reino de Dios a los hombres, y tres
grandes reyes magos de oriente guiados por una estrella vinieron a recibirlo con tres obsequios: oro incieso y mirra. El niño creció y realizó obras y prodigios que cambiaron el mundo
para siempre, dejándonos un legado espiritual basado en el amor a Dios y al prójimo que se extiende hasta nuestros días. Hoy el mundo cuenta con grandes avances tecnológicos. El progreso
trajo medios para reducir el hambre y la escasez, comunicar el mundo y mejorar la calidad de vida de las personas. Sin embargo, no es suficiente y muchos sufren pobreza y desigualdad. <br />
Pero no os desanimeis, aun hay algo que se puede hacer.`

/* let pagina1 = pagIzquierda.innerHTML= `Hace mucho, mucho tiempo; en una tierra lejana nació un niño especial. Antiguas profecías hablaban de que ese niño traería el reino de Dios a los hombres, y tres
grandes reyes magos de oriente guiados por una estrella vinieron a recibirlo con tres obsequios: oro incieso y mirra. <br />El niño creció y realizó obras y prodigios que cambiaron el mundo
para siempre, dejándonos un legado espiritual basado en el amor a Dios y al prójimo que se extiende hasta nuestros días. <br />Hoy el mundo cuenta con grandes avances tecnológicos. El progreso
trajo medios para reducir el hambre y la escasez, comunicar el mundo y mejorar la calidad de vida de las personas. Sin embargo, no es suficiente y muchos sufren pobreza y desigualdad. <br />
Pero no os desanimeis, aun hay algo que se puede hacer.` */

/* let pagina2 = pagIzquierda.innerHTML= `Os presento a Asha.<br />Ella es una niña de 8 años que vive en una aldea de la India. A Asha le gusta jugar con otros niños, cuidar los animales de su familia y ayudar a 
su abuela a cocinar. Pero si hay algo que de verdad la emociona es ir a la escuela. Allí no solo aprende a leer y escribir. A través de sus maestros comprende que el mundo es muy grande e imagina
todos los lugares que le gustaría conocer. También disfruta de descrifrar los secretos de las matemáticas (ya ha evitado que cobren de más a sus padres 2 veces en el mercadillo).<br />
Asha cree que si aprende más, un día podrá mejorar la vida de las personas, pero sus padre no tienes medios para pagar su educación. <br />
Ella tiene grandes sueños como ser una gran compositora, hacer robots, rodar películas... ¿Por qué no la ayudas? `
 */
/* let final = pagIzquierda.innerHTML = `Recuerda al niño de la historia <br />¿Imaginas que todos tuvieran la oportunidad de desarrollar su potencial?<br />Atrévete a dejarles soñar, para que algún día den fruto` */