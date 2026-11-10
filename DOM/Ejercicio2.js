const boton = document.querySelector("button");
const cajita = document.querySelector("div");

boton.addEventListener("click",function(){
    if(cajita.className == 'caja-apagada')
        cajita.className = 'caja-encendida';
    else cajita.className = 'caja-apagada';
});