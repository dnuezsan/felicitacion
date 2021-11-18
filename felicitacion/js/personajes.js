export class Personajes {
    constructor(nombre) {
        this.nombre = nombre
    }
    hablar(texto) {
        let p = document.createElement('p')
        p.appendChild(document.createTextNode("["+this.nombre+"]"+texto))
        document.body.appendChild(p)
    }
    pensar(texto) {
        let p = document.createElement('p')
        p.classList.add('pensar')
        p.appendChild(document.createTextNode("["+this.nombre+"]"+texto))
        //document.write("<p><i>[" + this.nombre + "]: " + texto + "</i></p>")
        document.body.appendChild(p)
    }
    narrar(texto) {
        let p = document.createElement('p')
        p.classList.add('narrar')
        p.appendChild(document.createTextNode(texto))
        document.body.appendChild(p)
    }
}

