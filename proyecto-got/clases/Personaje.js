export class Personaje{
    #nombre;
  #edad;
    #estado = "vivo";
    #casa;
    #vida = 100;//Por defecto todos tendrán 100
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}

    get getEdad(){return this.#edad;}
    set setEdad(edad){this.#edad = edad;}

    get getEstado(){return this.#estado;}
    set setEstado(estado){this.#estado = estado;}

    get getCasa(){return this.#casa;}
    set setCasa(casa){this.#casa = casa;}

    get getVida(){return this.#vida;}
    set setVida(vida){this.#vida = vida;}

    presentacion(){return "Soy "+this.#nombre+" de la casa "+this.#casa.getNombre;}//getNombre porque casa es una instancia, no un string
}