export class Arma{
    #nombre;
    #daño;
    #tipo;
    #material;
    constructor(nombre,daño,tipo,material){
        this.#nombre = nombre;
        this.#daño = daño;
        this.#tipo = tipo;
        this.#material = material;
    }
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}

    get getDaño(){return this.#daño;}
    set setDaño(daño){this.#daño = daño;}

    get getTipo(){return this.#tipo;}
    set setTipo(tipo){this.#tipo = tipo;}

    get getMaterial(){return this.#material;}
    set setMaterial(material){this.#material = material;}
    
    descripcion(){return this.#nombre+" "+"("+this.#tipo+")"+" - daño: "+this.#daño;}
}