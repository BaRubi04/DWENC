let numero = Number(prompt("Introduce numero para tabla de multiplicar: "));
let limite = Number(prompt("Introduce limite: "));
let mult;
for(let i = 1; i <= limite; i++){
    mult = numero*i;
    console.log(numero+" x "+i+" = "+mult);
}