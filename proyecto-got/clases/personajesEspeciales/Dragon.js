import { Personaje } from '../Personaje.js';
import { Caminante } from './Caminante.js';
export class Dragon extends Personaje{
    #poder;
    #tipoAtaque;
    constructor(nombre,edad,poder){
        super(nombre,edad);
        this.#poder = poder;
        this.#tipoAtaque = "fuego";
        this.setVida = 200;
    }
    get getPoder(){return this.#poder;}
    set setPoder(poder){this.#poder = poder;} 

    get getTipoAtaque(){return this.#tipoAtaque;}
    set setTipoAtaque(tipoAtaque){this.#tipoAtaque = tipoAtaque;} 

    ataca(oponente){
        if(oponente instanceof Caminante || oponente.getNombre.includes("Caminante")){//La segunda comprobación es para los transformados al morir
            oponente.setVida = 0;
            oponente.setEstado = "muerto";
            console.log("\t"+this.getNombre+" ha abrasado a "+oponente.getNombre+".");            
        }
        else{// Este cálculo de daño solo se aplica a dragones convertidos, dado que atacarían a humanos y otros dragones
            let daño = Math.floor(this.#poder * (0.7 + Math.random() * 0.6));
            oponente.setVida = oponente.getVida - daño;
            console.log(" "+this.getNombre+" arrasa a "+oponente.getNombre+" causando "+daño+" puntos de daño.");
            if(oponente.getVida < 1) {
                oponente.setVida = 0;
                oponente.setEstado = "muerto";
                console.log("\t"+oponente.getNombre+" ha muerto.");
            }
        }
    }
}