document.addEventListener('mousemove', (evento) => {
  const x = evento.clientX; // Posición horizontal (en píxeles)
  const y = evento.clientY; // Posición vertical (en píxeles)
  console.log(`Posición X: ${x}, Posición Y: ${y}`);
});
// Aquí poner los objetos Casa
arrayCasas=[

];
arrayCoordenadasX=[
    "632px",
    "763px",
    "829px",
    "624px",
    "781px",
    "607px",
    "699px",
    "792px",
    "621px",
    "748px",
    "623px",
    "845px"
];
arrayCoordenadasY=[
    "44px",
    "15px",
    "84px",
    "122px",
    "143px",
    "265px",
    "297px",
    "288px",
    "380px",
    "499px",
    "554px",
    "570px"
];
for(let i=1; i<=12; i++){
    const kuadr0 = document.createElement("div");
    kuadr0.className = "kuadr0";
    kuadr0.style.left = arrayCoordenadasX[i];
    kuadr0.style.top = arrayCoordenadasY[i];
    
}
// POSICIONES (x LEFT,y TOP)
    //632, 44
    //763, 15
    //829, 84
    //624, 122
    //781, 143

    //607, 265
    //699, 297
    //792, 288
    //621, 380

    //748, 499
    //623, 554
    //845, 570