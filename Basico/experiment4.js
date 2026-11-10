let persona = {nombre: "Ana", edad: 28, ciudad: "Madrid"};
for (let propiedad in persona) {
console.log(`${propiedad}: ${persona[propiedad]}`);
}