import { Arma } from "./armas.js";

export class PistolaPlasma extends Arma {
    constructor() {
        super()
        this.reserva = 6
    }
    disparar() {
        if(this.reserva>0){
            this.reserva--
            let p = document.createElement('p')
            p.appendChild(document.createTextNode("¡PIUUUUUUUUUUUUUUMBA!"))
            document.body.appendChild(p)
        }else{
            let p = document.createElement('p')
            p.appendChild(document.createTextNode("¡Que me estoy enfriando, animal!"))
            document.body.appendChild(p)
        }
    }
    enfriar() {
        this.reserva = 6;
        let p = document.createElement('p')
        p.appendChild(document.createTextNode("Enfriándome..."))
        document.body.appendChild(p)
    }

}