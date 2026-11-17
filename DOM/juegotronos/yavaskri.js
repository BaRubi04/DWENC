import { Casa } from './Casa.js';

let vacio = new Casa("","","","","");
let targaryen = new Casa("Targaryen","Tierras de la Corona","Fuego y sangre","Antigua dinastía real vinculada a los dragones",["Daenerys Targaryen", "Viserys Targaryen", "Aegon Targaryen"]);
let stark = new Casa("Stark","El Norte","Se acerca el invierno","Honor, lealtad y tradición",["Eddard Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Bran Stark"]);
let baratheon = new Casa("Baratheon","Tierras de la Tormenta","Nuestra es la furia","Fuerza, orgullo y espíritu guerrero",["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon"]);
let arryn = new Casa("Arryn","El Valle de Arryn","Tan alto como el honor","Una fortaleza situada en lo alto de las montañas",["Jon Arryn", "Robin Arryn"]);
let lannister = new Casa("Lannister","Occidente","¡Oye mi rugido!","Riqueza, poder político y ambición",["Tywin Lannister", "Cersei Lannister", "Jaime Lannister", "Tyrion Lannister"]);
lannister.setFraseConocida = 'Un Lannister siempre paga sus deudas';
let tully = new Casa("Tully","Tierras de los Ríos","Familia, deber, honor","Lealtad familiar y alianzas políticas",["Hoster Tully", "Edmure Tully", "Catelyn Tully"]);
let tyrell = new Casa("Tyrell","El Dominio","Crecer fuerte","Riqueza agrícola, diplomacia e influencia",["Mace Tyrell", "Margaery Tyrell", "Olenna Tyrell"]);
let bolton = new Casa("Bolton","El Norte","Nuestras hojas son afiladas","Una casa norteña conocida por su crueldad y rivalidad histórica con los Stark",["Roose Bolton", "Ramsay Bolton"]);
let greyjoy = new Casa("Greyjoy","Islas del Hierro","Nosotros no sembramos","Navegación, independencia y tradición marinera",["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"]);
let martell = new Casa("Martell","Dome","Nunca doblegado, nunca roto","Independencia, orgullo y resistencia",["Doran Martell", "Oberyn Martell", "Trystane Martell"]);

let arrayCasas=[targaryen,stark,baratheon,arryn,lannister,vacio,tully,tyrell,bolton,greyjoy,martell,vacio];
let arrayCoordenadasX=["32.44%","60.85%","75.5%","29.53%","65.10%","25.73%","46.53%","67.00%","28.64%","56.77%","29.5%","78.75%"];
let arrayCoordenadasY=["11.10%","07.00%","17.5%","22.65%","25.79%","44.06%","49.18%","48.25%","60.73%","78.26%","86.5%","88.30%"];

const caja = document.getElementById("cajitaImagen");
const tarjeta = document.getElementById("tarjetinha");
const datoNombre = document.getElementById("datoNombre");
const datoRegion = document.getElementById("datoRegion");
const datoLema = document.getElementById("datoLema");
const datoCaracteristicas = document.getElementById("datoCaracteristicas");
const datoPersonajes = document.getElementById("datoPersonajes");
const datoFraseConocida = document.getElementById("datoFraseConocida");
const datoEscudo = document.getElementById("datoEscudo");

let activacion = 'mouseover';

for(let i=0; i<12; i++){//Casas hover
    const kuadr0 = document.createElement("div");
    kuadr0.className = "kuadr0";
    kuadr0.style.left = arrayCoordenadasX[i];
    kuadr0.style.top = arrayCoordenadasY[i];

    if(i>5) activacion = 'click';
    kuadr0.addEventListener(activacion, function(){
        datoNombre.innerHTML = 'Casa: ' + arrayCasas[i].getNombre;
        datoRegion.innerHTML = 'Región: ' + arrayCasas[i].getRegion;
        datoLema.innerHTML = 'Lema: "<i>' + arrayCasas[i].getLema+'"</i>';
        datoCaracteristicas.innerHTML = 'Características: ' + arrayCasas[i].getCaracteristicas;
        datoPersonajes.innerHTML = 'Personajes: ' + arrayCasas[i].getPersonajes;
        if(arrayCasas[i].getFraseConocida == undefined)
            datoFraseConocida.innerHTML = '';
        else
            datoFraseConocida.textContent = 'Frase conocida: ' + arrayCasas[i].getFraseConocida;
        datoEscudo.src = arrayCasas[i].getEscudo;
        if(arrayCasas[i].getNombre != "") //Si no es una casa abandonada
            tarjeta.style.visibility = 'visible';
    });

    kuadr0.addEventListener("mouseleave", function(){
        tarjeta.style.visibility = 'hidden';
    });

    caja.appendChild(kuadr0);
}