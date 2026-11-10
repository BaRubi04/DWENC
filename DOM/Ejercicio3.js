const textarea = document.querySelector("textarea");
const p = document.querySelector("p");
let contador = 0;
textarea.addEventListener("keyup",function(){
    contador++;
    p.textContent = contador;
});