import { Caminante } from './personajesEspeciales/Caminante.js';
import { Guerrero } from './personajesEspeciales/Guerrero.js';
import { Dragon } from './personajesEspeciales/Dragon.js';
import { Casa } from './Casa.js';
export class Batalla{

    #combatientesA = [];
    #combatientesB = [];
    #muertosEnCombate = [];
    #supervivientes = [];

    #final = false;//final de batalla
    iniciarBatalla(casaA,casaB){
        if(!this.#final){//Si aún no ha ocurrido batalla(evita que pueda hacer otra con la misma instancia)
            if(casaA != casaB && casaA instanceof Casa && casaB instanceof Casa){
                casaA.getMiembros.forEach(miembro => {
                    if(miembro instanceof Guerrero && miembro.getEstado == 'vivo') 
                        this.#combatientesA.push(miembro);
                });
                casaB.getMiembros.forEach(miembro => {
                    if(miembro instanceof Guerrero && miembro.getEstado == 'vivo') 
                        this.#combatientesB.push(miembro);
                });
                
                console.log("Iniciamos la lucha...");
                console.log("Los guerreros que pelearán de la casa "+casaA.getNombre+" serán los siguientes:");
                console.log(this.#combatientesA);
                console.log("Los guerreros que pelearán de la casa"+casaB.getNombre+"serán los siguientes:");
                console.log(this.#combatientesB);

                let i = 0;//iterador combatientes casaA
                let j = 0;//iterador combatientes casaB
                
                while(!this.#final){
                    console.log("\nNuevo enfrentamiento: "+this.#combatientesA[i].getNombre+" vs "+this.#combatientesB[j].getNombre);
                    this.#combatientesA[i].ataca(this.#combatientesB[j]);
                    if(this.#combatientesB[j].getEstado == 'vivo')
                        this.#combatientesB[j].ataca(this.#combatientesA[i]);
                    console.log(this.#combatientesA[i].getNombre+": "+this.#combatientesA[i].getVida+" | "+this.#combatientesB[j].getNombre+": "+this.#combatientesB[j].getVida);

                    //Si uno muere, se pasa al siguiente
                    if(this.#combatientesA[i].getEstado == 'muerto') {
                        this.#muertosEnCombate.push(this.#combatientesA[i]);
                        i++;
                    }
                    if(this.#combatientesB[j].getEstado == 'muerto') {
                        this.#muertosEnCombate.push(this.#combatientesB[j]);
                        j++;
                    }
                    //Si ya no quedan mas combatientes en un bando u otro
                    if(this.#combatientesB[j] == undefined || this.#combatientesA[i] == undefined) this.#final = true;
                }
                /*Añade supervivientes, independientemente de su casa
                Se entiende que solo puede haber supervivientes de una casa,
                así que el primero que vea hará que declare dicha casa como vencedora*/
                this.#combatientesA.forEach(combatiente => {
                    if(combatiente.getEstado == 'vivo') 
                        this.#supervivientes.push(combatiente);
                });
                this.#combatientesB.forEach(combatiente => {
                    if(combatiente.getEstado == 'vivo') 
                        this.#supervivientes.push(combatiente);
                });

                console.log("La batalla ha sido ganada por la casa "+this.#supervivientes[0].getCasa.getNombre);
            }
            else console.log("No puedes enfrentar la misma casa contra sí misma.");
        }
        else console.log("Esta batalla ya sucedió, crea otra.");
    }
    //Si pongo los mensajes juntos, no me aparece bien los arrays
    mostrarGuerrerosMuertosEnCombate(){
        console.log("Guerreros caídos en combate:");
        console.log(this.#muertosEnCombate)
    }
    mostrarSupervivientes(){
        console.log("Supervivientes:")
        console.log(this.#supervivientes);
    }
    iniciarBatallaFinal(casa,comandante,khaleesi,caminantes){
        if(!this.#final){

            this.#combatientesA.push(comandante);
            casa.getMiembros.forEach(miembro => {
                if(miembro instanceof Guerrero && miembro.getEstado == 'vivo') 
                    this.#combatientesA.push(miembro);
            });
            khaleesi.getDragones.forEach(dragon => {
                if(dragon.getEstado == "vivo")
                    this.#combatientesA.push(dragon);
            });

            this.#combatientesB = [...caminantes];

            console.log("Iniciamos la batalla final...");
            console.log("Los buenos son:");
            console.log(this.#combatientesA);
            console.log("Los malos son:");
            console.log(this.#combatientesB);

            //Randomizando combatientes
            let i = Math.floor(Math.random() * this.#combatientesA.length);
            let j = Math.floor(Math.random() * this.#combatientesB.length);
            
            while(!this.#final){
                //Si ya no quedan mas combatientes en un bando u otro, acabar pelea
                if (this.#combatientesA.length === 0 || this.#combatientesB.length === 0) {
                    this.#final = true;
                    break; 
                }
                //Por si los indices se salen del tamaño
                if (i >= this.#combatientesA.length) i = Math.floor(Math.random() * this.#combatientesA.length);
                if (j >= this.#combatientesB.length) j = Math.floor(Math.random() * this.#combatientesB.length);

                console.log("\nNuevo enfrentamiento: "+this.#combatientesA[i].getNombre+" vs "+this.#combatientesB[j].getNombre);
                // En la batalla final, los turnos son aleatorios
                let indiceTurno = Math.random() < 0.5;// Devuelve true si es por debajo del valor, false si es superior.
                // (Random va de 0 a 0.9999999...)
                if(indiceTurno){// True, si le toca primero ir al bueno
                    this.#combatientesA[i].ataca(this.#combatientesB[j]);
                    if(this.#combatientesB[j].getEstado == 'vivo')
                        this.#combatientesB[j].ataca(this.#combatientesA[i]);
                }
                else{// False, si le toca primero ir al caminante
                    this.#combatientesB[j].ataca(this.#combatientesA[i]);
                    if(this.#combatientesA[i].getEstado == 'vivo')
                        this.#combatientesA[i].ataca(this.#combatientesB[j]);
                }
                console.log(this.#combatientesA[i].getNombre+": "+this.#combatientesA[i].getVida+" | "+this.#combatientesB[j].getNombre+": "+this.#combatientesB[j].getVida);

                /*Si uno muere, se randomiza el siguiente enemigo con el que combate el ganador
                  Los buenos al morir se convierten en caminantes blancos (incluidos dragones) */
                if(this.#combatientesA[i].getEstado == 'muerto') {
                    this.#muertosEnCombate.push(this.#combatientesA[i]);

                    if(this.#combatientesA[i] instanceof Dragon){
                        this.#combatientesA[i].setVida = 200;// Renacen con algo menos de vida
                        this.#combatientesA[i].setTipoAtaque = "hielo"; //Dragones caminantes escupen hielo en vez de fuego
                    }
                    if(this.#combatientesA[i] instanceof Guerrero)
                        this.#combatientesA[i].setVida = 80; // Renacen con algo menos de vida
                    // Llevan Caminante al final del nombre para que les afecten el acero valyrio (Consultar Guerrero y Dragon para mas detalles)
                    this.#combatientesA[i].setNombre = this.#combatientesA[i].getNombre + " Caminante";
                    this.#combatientesA[i].setEstado = 'vivo';

                    this.#combatientesB.push(this.#combatientesA[i]);
                    this.#combatientesA.splice(i, 1);//Borrar el combatiente bueno del array de sus camaradas

                    if (this.#combatientesA.length > 0) 
                        i = Math.floor(Math.random() * this.#combatientesA.length);        
                   // continue; // Para que se salte la próxima 
                }
                if(this.#combatientesB[j].getEstado == 'muerto') {
                    this.#muertosEnCombate.push(this.#combatientesB[j]);
                    this.#combatientesB.splice(j, 1);//Borrar el caminante abatido
                    if (this.#combatientesB.length > 0) 
                        j = Math.floor(Math.random() * this.#combatientesB.length);
                    //continue;
                }
            }

            /*Añade supervivientes, independientemente de si son buenos o malos
            Se entiende que solo puede haber supervivientes de un bando,
            así que el primero que vea hará que declare dicho bando como vencedor*/
            this.#combatientesA.forEach(combatiente => {
                if(combatiente.getEstado == 'vivo') 
                    this.#supervivientes.push(combatiente);
            });
            this.#combatientesB.forEach(combatiente => {
                if(combatiente.getEstado == 'vivo') 
                    this.#supervivientes.push(combatiente);
            });

            if(this.#supervivientes[0] instanceof Caminante) 
                console.log("Los caminantes han ganado.");
            else console.log("Los buenos han ganado.");
        }
        else console.log("Esta batalla final ya sucedió.");
    }
}