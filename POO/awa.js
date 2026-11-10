/*class Animal {
  name;                 // Propiedad (variable de clase sin valor definido)

  constructor(name) {
    this.name = name;   // Hacemos referencia a la propiedad name del objeto instanciado
  }
  ver(){
    console.log(this.name)
  }
}
let obj = new Animal('perrito');
obj.ver();
class Personaje {
  name;
  energy = 10;

  constructor(name) {
    this.name = name;
  }
}

const mario = new Personaje("Mario");     // { name: "Mario", energy: 10 }
console.log(mario.name);                               // "Mario" (se puede acceder desde fuera)
mario.name = "Evil Mario";
console.log(mario.name);  

class Personaje2 {
  #name;
  energy = 10;

  constructor(name) {
    this.#name = name;
  }
}

const luigi = new Personaje2("luigi");     // { name: "Mario", energy: 10 }

// Es incorrecto, el nombre correcto de la propiedad es #name
luigi.name; // undefined

// Los dos siguientes dan el mismo error (no se puede acceder a la propiedad privada)
// Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
luigi.#name;
luigi.#name = "Evil Mario";*/


// Lo siguiente funcionará, pero ha creado otra propiedad 'name' que no es la misma que '#name'
//luigi.name = "Evil Mario";
class Personaje {
  name;
  energy;

  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }

  get status() {
    return '⭐'.repeat(this.energy);
  }

  set status(stars) {
    this.energy = stars.length;
  }
}

const mario = new Personaje("Mario");
console.log(mario.energy);    // 10
mario.status = '⭐⭐⭐'
console.log(mario.energy);    // 3
console.log(mario.status);    // '⭐⭐⭐'