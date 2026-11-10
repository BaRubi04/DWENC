import { Rey } from './Rey.js';
export class Khaleesi extends Rey{
    #dragones = [];
    #consejero;
    constructor(nombre,edad,añosReinado,consejero,dragones){
        super(nombre,edad,añosReinado);
        this.#consejero = consejero;
        this.#dragones = dragones;
    }

    get getConsejero(){return this.#consejero;}
    set setConsejero(consejero){this.#consejero = consejero;} 

    get getDragones(){return this.#dragones;}
    set setDragones(dragones){this.#dragones = dragones;}
}