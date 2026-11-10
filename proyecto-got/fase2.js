import {Arma} from "./clases/Arma.js";
import {Casa} from "./clases/Casa.js";
import {Consejero} from "./clases/personajesEspeciales/Consejero.js";
import {Guerrero} from "./clases/personajesEspeciales/Guerrero.js";
import {Rey} from "./clases/personajesEspeciales/Rey.js";

let stark = new Casa("Stark","Se acerca el invierno");
let lannister = new Casa("Lannister","¡Oye mi rugido!");
let garra = new Arma("Garra","25","espada");
let jon = new Guerrero("Jon Snow",24,garra);
let robert = new Rey("Robert Baratheon",20,15);
let tyrion = new Consejero("Tyrion Lannister",20,"PHP");

stark.anadirMiembro(jon);
lannister.anadirMiembro(tyrion);
lannister.anadirMiembro(robert);

console.log(jon.presentacion());
jon.luchar();
jon.entrenar();
console.log(tyrion.presentacion());
tyrion.luchar();
tyrion.aconsejar(robert);
console.log(robert.presentacion());
robert.gobernar();
robert.luchar();