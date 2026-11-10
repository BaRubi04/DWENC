import {Arma} from "./clases/Arma.js";
import {Casa} from "./clases/Casa.js";
import {Guerrero} from "./clases/personajesEspeciales/Guerrero.js";
import {Caminante} from "./clases/personajesEspeciales/Caminante.js";
import {Khaleesi} from "./clases/personajesEspeciales/Khaleesi.js";
import {Dragon} from "./clases/personajesEspeciales/Dragon.js";
import {Consejero} from "./clases/personajesEspeciales/Consejero.js";
import {Batalla} from "./clases/Batalla.js";

let stark = new Casa("Stark","Se acerca el invierno");

let naginata = new Arma("Naginata",70,"arma de asta","acero valyrio");
let kusarigama = new Arma("Kusarigama",60,"hoz con cadena","acero oxidable");
let bo = new Arma("Bastón Bô", 35,"bastón de combate","madera");
let katana = new Arma("Katana", 50,"espada","acero valyrio");
let espadónSupremo = new Arma("Hoja Suprema",90,"Arma ficticia","acero valyrio")

let jon = new Guerrero("Jon Snow",20,espadónSupremo);
jon.setVida = 120;
stark.anadirMiembro(jon);
let soldadoKatana1 = new Guerrero("Soldado Katana",20,katana);
stark.anadirMiembro(soldadoKatana1);
let soldadoKatana2 = new Guerrero("Soldado Katana",20,katana);
stark.anadirMiembro(soldadoKatana2);
let soldadoKatana3 = new Guerrero("Soldado Katana",20,katana); 
stark.anadirMiembro(soldadoKatana3);
let soldadoKatana4 = new Guerrero("Soldado Katana",20,katana);
stark.anadirMiembro(soldadoKatana4);
let soldadoBo1 = new Guerrero("Soldado Bô",20,bo); 
stark.anadirMiembro(soldadoBo1);
let soldadoBo2 = new Guerrero("Soldado Bô",20,bo);
stark.anadirMiembro(soldadoBo2);
let soldadoKusarigama1 = new Guerrero("Soldado Kusarigama",20,kusarigama);
stark.anadirMiembro(soldadoKusarigama1);
let soldadoKusarigama2 = new Guerrero("Soldado Kusarigama",20,kusarigama);
stark.anadirMiembro(soldadoKusarigama2);
let soldadoNaginata1 = new Guerrero("Soldado Naginata",20,naginata); 
stark.anadirMiembro(soldadoNaginata1);
let soldadoNaginata2 = new Guerrero("Soldado Naginata",20,naginata);
stark.anadirMiembro(soldadoNaginata2);

let tyrion = new Consejero("Tyrion Lannister",23,"Hechizería");

let drogon = new Dragon("Drogon",30,100);
let viserion = new Dragon("Viserion",30,100);
let rhaegal = new Dragon("Rhaegal",30,100);

let daenerys = new Khaleesi("Daenerys Targaryen",22,10,tyrion,[drogon,viserion,rhaegal]);


let caminanteRaso1 = new Caminante("Caminante Raso",40);
let caminanteRaso2 = new Caminante("Caminante Raso",40);
let caminanteRaso3 = new Caminante("Caminante Raso",40);
let caminanteRaso4 = new Caminante("Caminante Raso",40);
let caminanteRaso5 = new Caminante("Caminante Raso",40);
let caminanteRaso6 = new Caminante("Caminante Raso",40);
let caminanteRaso7 = new Caminante("Caminante Raso",40);
let caminanteRaso8 = new Caminante("Caminante Raso",40);
let caminanteRaso9 = new Caminante("Caminante Raso",40);
let caminanteRaso10 = new Caminante("Caminante Raso",40);
let caminanteMago1 = new Caminante("Caminante Mago",80);
caminanteMago1.setVida = 70;
let caminanteMago2 = new Caminante("Caminante Mago",80);
caminanteMago2.setVida = 70;
let caminanteMago3 = new Caminante("Caminante Mago",80);
caminanteMago3.setVida = 70;
let caminanteElite1 = new Caminante("Caminante de Élite",55);
caminanteElite1.setVida = 120;
let caminanteElite2 = new Caminante("Caminante de Élite",55);
caminanteElite2.setVida = 120;
let caminanteJefe = new Caminante("Caminante Jefe",100);
caminanteJefe.setVida = 150;

let ejercitoCaminante = [
    caminanteRaso1,caminanteRaso2,caminanteRaso3,caminanteRaso4,caminanteRaso5,caminanteRaso6,caminanteRaso7,caminanteRaso8,caminanteRaso9,caminanteRaso10,
    caminanteMago1,caminanteMago2,caminanteMago3,
    caminanteElite1,caminanteElite2,
    caminanteJefe
]

let laGranBatalla = new Batalla();
laGranBatalla.iniciarBatallaFinal(stark,jon,daenerys,ejercitoCaminante);
laGranBatalla.mostrarGuerrerosMuertosEnCombate();
laGranBatalla.mostrarSupervivientes();