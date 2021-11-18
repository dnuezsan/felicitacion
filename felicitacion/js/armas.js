export class Arma {
    constructor(reserva) {
        this.reserva = reserva;
    }

    disparar() {
        this.reserva--
    }

    reservas(){
        console.log(this.reserva)
    }
}
