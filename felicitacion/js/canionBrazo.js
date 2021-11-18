import { Arma } from "./armas.js";

export class CanionBrazo extends Arma {
    constructor() {
        super()
        this.reserva = Number.POSITIVE_INFINITY
    }
    //Dispara el cañon generando un sonido
    disparar() {
        let p = document.createElement('p')
        p.appendChild(document.createTextNode("¡FIUUUUUUUUUUUUUUMBA!"))
        document.body.appendChild(p)
    }
}