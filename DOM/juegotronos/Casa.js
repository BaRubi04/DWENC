export class Casa{
    #nombre;
    #region;
    #lema;
    #caracteristicas;
    #personajes = [];
    #fraseConocida;
    constructor(nombre,region,lema,caracteristicas){
        this.#nombre = nombre;
        this.#region = region;
        this.#lema = lema;
        this.#caracteristicas = caracteristicas;
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

    anadirMiembro(miembro){
        if(!this.#personajes.find(x => x == miembro) && miembro.getEstado == 'vivo'){
            this.#personajes.push(miembro);
            console.log(miembro.getNombre+" ha sido añadido a la casa "+this.#nombre);
            miembro.setCasa = this;
        }
        else 
            console.log(miembro.getNombre+" ya es miembro de la casa "+this.#nombre);
    }
    quitarMiembro(miembro){
        if(this.#personajes.find(x => x == miembro)){
            this.#personajes.pop(miembro);
            console.log(miembro.getNombre+" ha sido expulsado de la casa "+this.#nombre);
            miembro.setCasa = undefined;
        }
        else 
            console.log(miembro.getNombre+" no estaba en la casa "+this.#nombre);
    }
    listarMiembros(){
        console.log("Miembros de la casa "+this.#nombre+": ");
        this.#personajes.forEach(miembro => console.log("- "+miembro.getNombre));
    }
}