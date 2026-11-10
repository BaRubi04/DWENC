import { Personaje } from '../Personaje.js';
export class Consejero extends Personaje{
    #especialidad;
    constructor(nombre,edad,especialidad){
        super(nombre,edad);
        this.#especialidad = especialidad;
    }

    get getEspecialidad(){return this.#especialidad;}
    set setEspecialidad(especialidad){this.#especialidad = especialidad;} 

    luchar(){console.log(`${this.getNombre} no lucha con armas, sino con palabras e inteligencia.`);}
    aconsejar(aconsejado){console.log(`${this.getNombre} aconseja a ${aconsejado.getNombre} sobre ${this.#especialidad}`);}
}