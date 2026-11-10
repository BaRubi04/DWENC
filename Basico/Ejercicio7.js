let array = [];
let valor = prompt("Introduce: ");
let i = 0;
while(valor != "stop"){
    array[i] = Number(valor);
    valor = prompt("Introduce: ");
    i++;
}

console.log(Math.max(array));