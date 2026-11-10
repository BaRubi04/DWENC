let registrados = [];
let idSocio, nombreSocio = "", email = ""; 

////// Socios ///////

function registrarSocios(){
    idSocio = Number(prompt("Id: "));
    nombreSocio = prompt("Nombre: ");
    email = prompt("Correo: ");
    
    if(!registrados.some(socio => (socio.id === idSocio) || (socio.correo === email))){
        let socio = {
            id: idSocio,
            nombre: nombreSocio,
            correo: email,
        }
        registrados.push(socio);
    }
    else{
        alert("Ya existe");
    }
}

function listarSocios(){
    console.clear();
    console.log("Registrados: ");
    registrados.forEach(socio => console.log("\t"+socio.nombre));
}

////// Clases ///////

let clases = [];
let idClase, nombreClase = "", nombreInstructor = "", cupos;

function registrarNuevasClases(){
    idClase = Number(prompt("Id: "));
    nombreClase = prompt("Nombre: ");
    nombreInstructor = prompt("Instructor: ");
    cupos = Number(prompt("Cupos: "));
    
    if(!clases.some(socio => (socio.id === idSocio))){
        let clase = {
            id: idClase,
            nombre: nombreClase,
            coach: nombreInstructor,
            plazas: cupos,
        }
        clases.push(clase);
    }
    else{
        alert("Ya existe");
    }
}

function listarClases(){
    console.clear();
    console.log("Clases: ");
    clases.forEach(clase => console.log("\t"+clase.nombreClase));
}

function buscarClases(){
    criterio = prompt("Criterio de búsqueda: ");
    if(criterio === 'nombre'){
        console.log(clases.filter(clase => clase.nombre === prompt("Nombre de la clase: ")));
    }
    else if(criterio === 'instructor'){
        console.log(clases.filter(clase => clase.coach === prompt("Instructor: ")));
    }
    else
        alert("El criterio debe ser nombre o instructor");
}

////// Inscripciones ///////

let inscripciones = new Set();

function inscribir(){
    nombreSocio = prompt("Nombre socio: ");
    nombreClase = prompt("Nombre clase: ");
    
    let claseBuscada = clases.find(clase => clase.nombre === nombreClase);
    let socioBuscado = registrados.find(socio => socio.nombre === nombreSocio);

    let inscripcion = {
        idSocio: socioBuscado.id,
        idClase: claseBuscada.id
    }

    if(claseBuscada.cupos > 0){
        inscripciones.add(inscripcion);
        clases.find(clase => clase.nombre === nombreClase).cupos -= 1
    }
    else{
        alert("No quedan cupos");
    }        
}

function clasesInscritasPorSocio(){
    nombreSocio = prompt("Nombre socio: ");
    socioBuscado = registrados.find(socio => socio.nombre === nombreSocio);
    console.log(nombreSocio);
    inscripciones.forEach(inscripcion => {
        if(inscripcion.idSocio === socioBuscado.idSocio){
            claseBuscada = clases.find(clase => clase.idClase === inscripcion.idClase)
            console.log("\n\t"+claseBuscada.nombre);
        }
    })
}

function sociosClase(){
    nombreClase = prompt("Nombre socio: ");
    claseBuscada = registrados.find(socio => socio.nombre === nombreSocio);
    console.log(nombreClase);
    inscripciones.forEach(inscripcion => {
        if(inscripcion.idClase === claseBuscada.idClase){
            socioBuscado = registrados.find(socio => socio.idSocio === inscripcion.idSocio)
            console.log("\n\t"+claseBuscada.nombre);
        }
    })
}

function clasesConCupos(){
    inscripciones.forEach(inscripcion => {
        claseBuscada = clases.find(clase => clase.idClase === inscripcion.idClase);
        if(claseBuscada.cupos > 0)
            console.log("\n\t"+claseBuscada.nombre);
    });
}

function sociosInscritosPorInstructor(){

}