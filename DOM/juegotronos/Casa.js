export class Casa{
    #nombre;
    #region;
    #lema;
    #caracteristicas;
    #personajes = [];
    #fraseConocida;
    #escudo;
    constructor(nombre,region,lema,caracteristicas,...personajes){
        this.#nombre = nombre;
        this.#region = region;
        this.#lema = lema;
        this.#caracteristicas = caracteristicas;
        this.#personajes = personajes;
        this.#escudo = 'imagenes/escudo_'+nombre+'.png';
    }
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}

    get getRegion(){return this.#region;}
    set setRegion(region){this.#region = region;}

    get getCaracteristicas(){return this.#caracteristicas;}
    set setCaracteristicas(caracteristicas){this.#caracteristicas = caracteristicas;}

    get getLema(){return this.#lema;}
    set setLema(lema){this.#lema = lema;}

    get getFraseConocida(){return this.#fraseConocida;}
    set setFraseConocida(fraseConocida){this.#fraseConocida = fraseConocida;}

    get getPersonajes(){return this.#personajes;}
    set setPersonajes(personajes){this.#personajes = personajes;}

    get getEscudo(){return this.#escudo;}
    set setEscudo(escudo){this.#escudo = escudo;}
}