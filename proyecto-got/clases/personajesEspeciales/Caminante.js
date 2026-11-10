import { Personaje } from '../Personaje.js';
export class Caminante extends Personaje{
    #poderHelado;
    constructor(nombre,poderHelado){
        super(nombre);
        this.#poderHelado = poderHelado;
    }

    get getpoderHelado(){return this.#poderHelado;}
    set setpoderHelado(poderHelado){this.#poderHelado = poderHelado;} 

    ataca(oponente){
        let daño = Math.floor(this.#poderHelado * (0.7 + Math.random() * 0.6));
        oponente.setVida = oponente.getVida - daño;
        console.log(" "+this.getNombre+" ataca a "+oponente.getNombre+" causando "+daño+" puntos de daño.");
        if(oponente.getVida < 1) {
            oponente.setVida = 0;
            oponente.setEstado = "muerto";
            console.log("\t"+oponente.getNombre+" ha muerto.");
        }
    }
}