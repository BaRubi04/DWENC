import {Arma} from "./clases/Arma.js";
import {Casa} from "./clases/Casa.js";
import {Personaje} from "./clases/Personaje.js";
import {Reino} from "./clases/Reino.js";

let poniente = new Reino("Poniente");
let stark = new Casa("Stark","Se acerca el invierno");
let lannister = new Casa("Lannister","¡Oye mi rugido!");
let aguja = new Arma("Aguja","15","espada");
let garra = new Arma("Garra","25","espada");
let jon = new Personaje("Jon Snow",24);
let arya = new Personaje("Arya Stark",24);
let jaime = new Personaje("Jaime Lannister",24);

// Pruebas

poniente.añadirCasa(stark);
poniente.añadirCasa(lannister);

jon.setArma = garra;
arya.setArma = aguja;

stark.anadirMiembro(jon);
jon.setCasa = stark;
stark.anadirMiembro(arya);
arya.setCasa = stark;//No hacer esto, la instancia del personaje se modifica por referencia
lannister.anadirMiembro(jaime);
jaime.setCasa = lannister;

poniente.setRey = jaime;
poniente.listarCasas();
poniente.mostrarRey();

stark.listarMiembros();

//No hago presentaciones como una función de Reino porque el enunciado dice que cada personaje debe poder presentarse
//Así que asumo que la función de presentación debe ser innata de cada uno
console.log("Presentaciones: ");
poniente.getCasas.forEach(casa => {
    casa.miembros.forEach(miembro => {
        console.log(miembro.presentacion());
    });
});

console.log("Armas: ");
console.log(garra.descripcion());
console.log(aguja.descripcion());