export class Casa{
    #nombre;
    #lema;
    #miembros = [];
    constructor(nombre,lema){
        this.#nombre = nombre;
        this.#lema = lema;
    }
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}

    get getLema(){return this.#lema;}
    set setLema(lema){this.#lema = lema;}

    get getMiembros(){return this.#miembros;}

    anadirMiembro(miembro){
        if(!this.#miembros.find(x => x == miembro) && miembro.getEstado == 'vivo'){
            this.#miembros.push(miembro);
            console.log(miembro.getNombre+" ha sido añadido a la casa "+this.#nombre);
            miembro.setCasa = this;
        }
        else 
            console.log(miembro.getNombre+" ya es miembro de la casa "+this.#nombre);
    }
    quitarMiembro(miembro){
        if(this.#miembros.find(x => x == miembro)){
            this.#miembros.pop(miembro);
            console.log(miembro.getNombre+" ha sido expulsado de la casa "+this.#nombre);
            miembro.setCasa = undefined;
        }
        else 
            console.log(miembro.getNombre+" no estaba en la casa "+this.#nombre);
    }
    listarMiembros(){
        console.log("Miembros de la casa "+this.#nombre+": ");
        this.#miembros.forEach(miembro => console.log("- "+miembro.getNombre));
    }
}