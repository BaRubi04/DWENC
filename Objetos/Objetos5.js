let datos = { nombre: "Ana", edad: 25, activo: true, salario: 1200};
let filtrarPorTipo = (obj, tipo) => {
    let resultado = {};
    
    for (let clave in obj) {
        if (typeof obj[clave] === tipo) {
            resultado[clave] = obj[clave];
        }
    }
    
    return resultado;
};
console.log(filtrarPorTipo(datos, "number"));
// { edad: 25, salario: 1200}