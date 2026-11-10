let abuelo = document.getElementById("abuelo");
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");
abuelo.addEventListener("click",function(event){
    abuelo.style.backgroundColor = "red";
    event.stopPropagation();
    console.log("click en abuelo");
});
padre.addEventListener("click",function(event){
    padre.style.backgroundColor = "blue";
    event.stopPropagation();
    console.log("click en padre");
});
hijo.addEventListener("click",function(event){
    hijo.style.backgroundColor = "green";
    event.stopPropagation();
    console.log("click en hijo");
});