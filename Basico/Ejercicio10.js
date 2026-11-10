function calculadora(num1,num2,op){
    switch(op){
        case "+":
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
            break;
        case "*":
            console.log(num1*num2);
            break;
        case "/":
            console.log(num1/num2);
            break;
        default:
            alert("Operacion no valida");
    }
}
let num1,num2,op;
num1 = Number(prompt("Numero 1:"));
num2 = Number(prompt("Numero 2:"));
op = prompt("Operacion:");
calculadora(num1,num2,op);