const boton = document.querySelector("button");
const h2 = document.querySelector("h2");

boton.addEventListener("click",function(){
    h2.textContent = "Estado: ¡ACTIVO!";
    h2.style.color = "green";
});