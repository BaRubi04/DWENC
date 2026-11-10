import { Personaje } from '../Personaje.js';
export class Rey extends Personaje{
    #añosDeReinado;
    constructor(nombre,edad,añosDeReinado){
        super(nombre,edad);
        this.#añosDeReinado = añosDeReinado;
    } 
    get getAñosDeReinado(){return this.#añosDeReinado;}
    set setAñosDeReinado(añosDeReinado){this.#añosDeReinado = añosDeReinado;}

    luchar(){console.log(`${this.getNombre} lidera la batalla y anima a sus tropas.`);}
    gobernar(){console.log(`${this.getNombre} gobierna con sabiduría desde hace ${this.#añosDeReinado} años`);}
}