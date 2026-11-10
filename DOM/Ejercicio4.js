const a = document.querySelector("a");
a.addEventListener("click",function(event){
    event.preventDefault();
    alert("Navegación Bloqueada por Javascript");
})
