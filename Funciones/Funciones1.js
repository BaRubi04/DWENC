let num1,num2,num3,menor;
num1 = Number(prompt("Introduce primer numero: "));
num2 = Number(prompt("Introduce segundo numero: "));
num3 = Number(prompt("Introduce tercer numero: "));
let calcmenor = (num1,num2,num3) => {
    if(num1 > num2) menor = num1; else menor = num2;
    if(num1 > num3) menor = num1; else menor = num3;
    if(num2 > num3) menor = num2; else menor = num3;
    return menor;
};

console.log(calcmenor(num1,num2,num3));