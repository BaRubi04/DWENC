class Libro{
    titulo = "";
    autor = "";
    disponible = true;
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }
    get getTitulo(){
        return this.titulo;
    }
    get getAutor(){
        return this.autor;
    }
    get getDisponible(){
        return this.disponible;
    }
    set setTitulo(titulo){
        this.titulo = titulo;
    }
    set setAutor(autor){
        this.autor = autor;
    }
    prestar(){
        if(this.disponible == false){
            alert("No puedes prestar un libro que no está disponible");
        }
        else this.disponible = false; 
    }
    devolver(){
        if(this.disponible == true){
            alert("No puedes devolver un libro que no está prestado");
        }
        else this.disponible = true;
    }
}
class Usuario{
    nombre;
    edad;
    telefono = "";
    librosPrestados = new Set();
    constructor(nombre,edad,telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    get getEdad(){
        return this.edad;
    }
    get getTelefono(){
        return this.telefono;
    }
    set setEdad(edad){
        this.edad = edad;
    }
    set setTelefono(telefono){
        this.telefono = telefono;
    }
    prestarLibro(objLibro){
        this.librosPrestados.add(objLibro.getTitulo);
        objLibro.prestar();
        return objLibro;
    }
    devolverLibro(objLibro){
        this.librosPrestados.forEach((value,key,map) => {
            if(value.getTitulo == objLibro.getTitulo) 
                this.librosPrestados.delete(key);
        });
        objLibro.devolver();
        return objLibro;
    }
}
class Biblioteca{
    name = "";
    usuarios = new Map();
    libros = new Map();

    idLibro = 0;
    idUsuario = 0;

    constructor(name){
        this.name = name;
    }
    agregarLibro(objLibro){
        this.libros.set(this.idLibro+1,objLibro);
        this.idLibro++;
    }
    registrarUsuario(objUsuario){
        this.usuarios.set(this.idUsuario+1,objUsuario);
        this.idUsuario++;
    }
    mostrarLibrosDisponibles(){
        console.log("Disponibles: ")
        this.libros.forEach((libro,id) => {
            if(libro.getDisponible) console.log("\t"+libro.getTitulo);
        });
    }
}

let libro1 = new Libro("El Quijote","Cervantes");
let libro2 = new Libro("Libro guay","Rubí");

let usuario1 = new Usuario("Rubí",21,"456876719");

let biblioteca = new Biblioteca("Biblioteca Santa María");
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.registrarUsuario(usuario1);

biblioteca.mostrarLibrosDisponibles();

libro1 = usuario1.prestarLibro(libro1);//Pongo el libro con el igual para que se actualize la disponibilidad
biblioteca.mostrarLibrosDisponibles();

libro1 = usuario1.devolverLibro(libro1);
biblioteca.mostrarLibrosDisponibles();