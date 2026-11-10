import {Rey} from './personajesEspeciales/Rey.js';
export class Reino{
    #nombre;
    #casas = [];
    #rey;
    constructor(nombre){this.#nombre = nombre;}

    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}

    get getRey(){return this.#rey;}
    set setRey(rey){this.#rey = rey;}

    get getCasas(){return this.#casas;}
    
    añadirCasa(casa){
        if(!this.#casas.find(x => x == casa)){//Si no está ya en el array, meterla
            this.#casas.push(casa);
            console.log("La casa "+casa.getNombre+" ha sido añadida al reino de "+this.#nombre);
        }
        else 
            console.log("La casa "+casa.getNombre+" ya es parte del reino del reino de "+this.#nombre);
    }
    listarCasas(){
        console.log("Casas del reino de "+this.#nombre+": ");
        this.casas.forEach(casa => console.log("- Casa "+casa.getNombre));
    }
    coronarRey(rey){
        if(rey instanceof Rey){
            this.#rey = rey;
            console.log(rey.getNombre+" ha sido proclamado rey de "+this.#nombre);
        }
        else console.log(rey.getNombre+" no puede ser proclamado rey.");
    }
    mostrarRey(){
        console.log("Rey actual: ");
        console.log("El rey actual es "+this.#rey.getNombre+" de la casa "+this.#rey.getCasa.getNombre+".");//el nombre de la casa (instancia) del rey
    }
}