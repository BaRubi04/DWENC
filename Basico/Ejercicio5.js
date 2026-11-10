let array = ["rojo","amarillo","verde","azul","blanco"];
console.log(array);
let color = "";
while(color != "fin"){
    color = prompt("Introduce color:");
    array[array.length] = color;
    console.log(array);
}