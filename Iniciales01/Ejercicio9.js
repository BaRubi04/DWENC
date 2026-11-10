let num1,num2;
num1 = Number(prompt("Introduce un número: "));
num2 = Number(prompt("Introduce otro número: "));
if(num1 > num2){
    alert(`Suma: ${num1+num2}`);
    alert(`Diferencia: ${num1-num2}`);
}
else{ 
    alert(`Producto: ${num1*num2}`);
    alert(`División: ${num1/num2}`);
}