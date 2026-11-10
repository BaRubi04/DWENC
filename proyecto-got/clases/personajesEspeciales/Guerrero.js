import { Personaje } from '../Personaje.js';
import { Caminante } from './Caminante.js';
export class Guerrero extends Personaje{
    #arma;
    constructor(nombre,edad,arma){
        super(nombre,edad);
        this.#arma = arma;
    }

    get getArma(){return this.#arma;}
    set setArma(arma){this.#arma = arma;} 

    equipar(arma){
        this.#arma = arma;
        console.log(this.getNombre+" ha equipado el arma "+arma.getNombre);
    }
    luchar(){console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDaño} puntos de daño`);}

    ataca(oponente){
        let daño = Math.floor(this.#arma.getDaño * (0.7 + Math.random() * 0.6));
        if(!oponente instanceof Caminante || !oponente.getNombre.includes("Caminante")){//La segunda comprobación es para los transformados al morir
            oponente.setVida = oponente.getVida - daño;
            console.log(this.getNombre+" ataca a "+oponente.getNombre+" causando "+daño+" puntos de daño.");
            if(oponente.getVida < 1) {
                oponente.setVida = 0;
                oponente.setEstado = "muerto";
                console.log("\t"+oponente.getNombre+" ha muerto.");
            }
        }
        else{// Si el oponente es un Caminante inicial o transformado...
            if(this.#arma.getMaterial == "acero valyrio"){
                oponente.setVida = oponente.getVida - daño;
                console.log(" "+this.getNombre+" ataca a "+oponente.getNombre+" causando "+daño+" puntos de daño.");
                if(oponente.getVida < 1) {
                    oponente.setVida = 0;
                    oponente.setEstado = "muerto";
                    console.log("\t"+oponente.getNombre+" ha muerto.");
                }
            }
            else console.log("\t"+oponente.getNombre+" ha ignorado el daño de "+this.#arma.getNombre+"!");
        }
    }
    entrenar(){console.log(`${this.getNombre} entrena sin descanso para la próxima batalla`);}
}