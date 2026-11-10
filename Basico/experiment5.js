
function mostrarTodos(...args) {
    for(let arg of args) 
        console.log(arg);
}
mostrarTodos("uno", "dos", "tres");
// Muestra:
// uno
// dos
// tres