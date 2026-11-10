let cadena = prompt("Mete cadena");
let i, j, espalindromo = true, cadenareves = "";
for(i = cadena.length-1, j = 0; i >= 0; i--, j++){
    cadenareves += cadena[i];
    if(cadena[j] !== cadena[i])
        espalindromo = false;
}
console.log(cadenareves);
console.log(espalindromo);