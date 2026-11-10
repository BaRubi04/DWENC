let objExploraciones = {
  arrayExploraciones : [
    {
      nombre: "Exploración Alfa",
      rover: { nombre: "Rover 1", modelo: "RX-100", energia: 150 },
      cientificos: [
        { nombre: "Dr. Vega", especialidad: "Geología", pais: "España", edad: 42 },
        { nombre: "Dra. Silva", especialidad: "Biología", pais: "Brasil", edad: 36 },
        { nombre: "Dr. Ruiz", especialidad: "Física", pais: "México", edad: 50 }
      ],
      lunaDestino: "Europa"
    },
    {
      nombre: "Exploración Beta",
      rover: { nombre: "Rover 2", modelo: "RX-200", energia: 120 },
      cientificos: [
        { nombre: "Dra. Silva", especialidad: "Biología", pais: "Brasil", edad: 36 },
        { nombre: "Dr. Kim", especialidad: "Astroquímica", pais: "Corea del Sur", edad: 41 }
      ],
      lunaDestino: "Titán"
    },
    {
      nombre: "Exploración Gamma",
      rover: { nombre: "Rover 3", modelo: "RX-100", energia: 180 },
      cientificos: [
        { nombre: "Dr. Vega", especialidad: "Geología", pais: "España", edad: 42 },
        { nombre: "Dra. Lee", especialidad: "Biología", pais: "Japón", edad: 38 }
      ],
      lunaDestino: "Europa"
    },
    {
      nombre: "Exploración Delta",
      rover: { nombre: "Rover 4", modelo: "RX-300", energia: 90 },
      cientificos: [
        { nombre: "Dr. Kim", especialidad: "Astroquímica", pais: "Corea del Sur", edad: 41 },
        { nombre: "Dra. Torres", especialidad: "Meteorología", pais: "Argentina", edad: 35 }
      ],
      lunaDestino: "Ganímedes"
    }
  ],
  // Muestra los científicos con edades superiores a 40 años en cada exploración.
  cientificosMasDe40: function(){
      console.log("Científicos con mas de 40 años: ");
      this.arrayExploraciones.forEach(exploracion => {
          exploracion.cientificos.forEach(cientifico => {
              if(cientifico.edad > 40) 
                  console.log("\t"+cientifico.nombre);
          });
      });
  },
  // Agrupa las exploraciones por la luna destino en una nueva estructura de datos (objeto o Map) y muéstrala por consola.
  exploracionesPorLuna: function(){
      let mapaExploraciones = new Map();
      this.arrayExploraciones.forEach(exploracion => {
          mapaExploraciones.set(exploracion.nombre,exploracion.lunaDestino);
      });
      console.log(mapaExploraciones);
  },
  // Crea un array con todos los científicos sin repetir, mostrando su nombre, país y especialidad.
  todosLosCientificos: function(){
      let setCientificos = new Set();
      this.arrayExploraciones.forEach(exploracion => {
          exploracion.cientificos.forEach(cientifico => {
              setCientificos.add(cientifico);
          })
      });
      console.log("Todos los cientificos: ");
      setCientificos.forEach((valor,valorAgain,set) => console.log("\t"+valor.nombre+", "+valor.pais+", "+valor.especialidad));
  },
  // Crea una función que indique qué modelos de rover se han utilizado y cuántas veces ha aparecido cada uno.
  modelosRover: function(){
      let roversUsados = [];
      this.arrayExploraciones.forEach(exploracion => roversUsados.push(exploracion.rover.nombre));

      //creo que tengo que meter esto en un bucle con arrayExploraciones
      roversUsados.forEach(rover => {
        let cuenta = 0;

      });
  },
  // Crea una función que determine qué país tiene más científicos distintos participando en las exploraciones y devuelve ese país (o, si hay empate, un objeto con los países y sus conteos)
  paisMasCientificosDistintos: function(){
    let paises = new Set();
    this.arrayExploraciones.forEach(exp => exp.cientificos.forEach(cientifico => paises.add(cientificos.pais)));

    let paisesCientificos = new Map();

    paises.forEach(pais => {
      let cientificos = new Set();
      this.arrayExploraciones.forEach(exp => exp.cientificos.forEach(cientifico => {
        if(cientifico.pais === pais) cientificos.add(cientificos.nombre)
      }));
      paisesCientificos.set(pais,cientificos.size);
    })

    let conteo = [...paisesCientificos.entries()];
    conteo.sort((a,b) => b[1] - a[1]);

    let maxConteo = conteo[0][1];
    let ganadores = conteo.filter(([pais,num]) => num == maxConteo);

    if(ganadores.length === 1) console.log (ganadores[0][0]);
    else{
      let objFinal = {};
      ganadores.forEach(([pais,num]) => objFinal[pais]==num);
      console.log(objFinal);
    }
  }
}
objExploraciones.cientificosMasDe40();
objExploraciones.exploracionesPorLuna();
objExploraciones.todosLosCientificos();
//objExploraciones.modelosRover();
objExploraciones.paisMasCientificosDistintos();