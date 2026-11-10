/*********************************************************************************************************
 * 
 *  EJERCICIO PARA PRACTICAR 
 *  1. Crea un formulario con un campo para el nombre del usuario
 *  2. Cuando el usuario escriba su nombre y pulse un botón, guarda el nombre en sessionStorage.
 *  3. Al recargar la página, muestra un mensaje tipo:
 *      Bienvenido de nuevo, [nombre]", si el dato existe en sessionStorage.
 *  4. Añade un botón “Cerrar sesión” que elimine los datos de sessionStorage.
 *  
 *  (Este ejercicio no requiere todavía manipular el DOM a fondo; puedes hacerlo con prompt() y alert()
 * 
 *********************************************************************************************************/
function bienvenida(){
    if(sessionStorage.length > 1){
        alert("Bienvenid@ de nuevo, "+sessionStorage.getItem("usuario"));
    }
}
bienvenida();
function pedirUsuario(){
    let nombre = prompt("Nombre Usuario: ");
    sessionStorage.setItem("usuario", nombre);
}
function cerrarSesion(){
    sessionStorage.clear();
}