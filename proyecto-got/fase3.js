import {Arma} from "./clases/Arma.js";
import {Casa} from "./clases/Casa.js";
import {Guerrero} from "./clases/personajesEspeciales/Guerrero.js";
import {Batalla} from "./clases/Batalla.js";

let stark = new Casa("Stark","Se acerca el invierno");
let lannister = new Casa("Lannister","¡Oye mi rugido!");

let garra = new Arma("Garra",40,"espada");
let espadón = new Arma("Espadón",60,"espada");
let longinus = new Arma("Longinus", 50,"lanza");
let teseracto = new Arma("Teseracto",999,"hiper cubo");

let jon = new Guerrero("Jon Snow",20,espadón);
let soldado1 = new Guerrero("soldado1",20,longinus);
let soldado2 = new Guerrero("soldado2",20,longinus);
let soldado3 = new Guerrero("soldado3",20,longinus); 

let guerrero1 = new Guerrero("guerrero1",20,garra);
let guerrero2 = new Guerrero("guerrero2",20,garra);
let arya = new Guerrero("Arya Stark",20,teseracto);
arya.setVida = 150;

lannister.anadirMiembro(jon);
lannister.anadirMiembro(soldado1);
lannister.anadirMiembro(soldado2);
lannister.anadirMiembro(soldado3);

stark.anadirMiembro(guerrero1);
stark.anadirMiembro(guerrero2);
stark.anadirMiembro(arya);

let batallaStarkvsLannister = new Batalla();
batallaStarkvsLannister.iniciarBatalla(stark,lannister);
batallaStarkvsLannister.mostrarGuerrerosMuertosEnCombate();
batallaStarkvsLannister.mostrarSupervivientes();