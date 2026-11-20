const btn = document.getElementById('btnFetchCharacters');
const cuerpo = document.querySelector('body');
const btnTxt = document.getElementById('btnTxt');

btn.addEventListener('click', () => {
    //console.log("fetch API");
    /*
    fetch('https://rickandmortyapi.com/api/character')                      //indicamos url que queremos consultar
    .then((response) => response.json())                                    //respuesta con response y la tratamos como un json
     .then((data) => rendersCharacters(data.results));     
    */
    await sacacióndedatos();
    //la data la mostramos por consola.
});
async function sacacióndedatos(){
    const awa = await fetch('https://rickandmortyapi.com/api/character') ;
}

function rendersCharacters(personajes){
    personajes.forEach(personaje => {

        const tarjeta = document.createElement('div');
        tarjeta.className = 'personaje';
        const imagen = document.createElement('div');
        imagen.className = 'imagen';
        const informacion = document.createElement('div');
        informacion.className = 'informacion';
        const nombre = document.createElement('div');
        nombre.className = 'nombre';
        const estatus = document.createElement('div');
        estatus.className = 'estatus';
        const ultimoLugarVisto = document.createElement('div');
        ultimoLugarVisto.className = 'ultimoLugarVisto';
        const vistoPrimeraVez = document.createElement('div');
        vistoPrimeraVez.className = 'vistoPrimeraVez';

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(informacion);
        informacion.appendChild(nombre);
        informacion.appendChild(estatus);
        informacion.appendChild(ultimoLugarVisto);
        informacion.appendChild(vistoPrimeraVez);

        cuerpo.appendChild(tarjeta);

        imagen.innerHTML += `<img src="${personaje.image}">`;
        nombre.textContent = personaje.name;
        estatus.textContent = personaje.status;
        ultimoLugarVisto.textContent = personaje.location.name;
        vistoPrimeraVez.textContent = personaje.episode[0].name;

        
    });
}
async function rendersCharacters(personajes){
    personajes.forEach(personaje => {

        const tarjeta = document.createElement('div');
        tarjeta.className = 'personaje';
        const imagen = document.createElement('div');
        imagen.className = 'imagen';
        const informacion = document.createElement('div');
        informacion.className = 'informacion';
        const nombre = document.createElement('div');
        nombre.className = 'nombre';
        const estatus = document.createElement('div');
        estatus.className = 'estatus';
        const ultimoLugarVisto = document.createElement('div');
        ultimoLugarVisto.className = 'ultimoLugarVisto';
        const vistoPrimeraVez = document.createElement('div');
        vistoPrimeraVez.className = 'vistoPrimeraVez';

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(informacion);
        informacion.appendChild(nombre);
        informacion.appendChild(estatus);
        informacion.appendChild(ultimoLugarVisto);
        informacion.appendChild(vistoPrimeraVez);

        cuerpo.appendChild(tarjeta);

        imagen.innerHTML += `<img src="${personaje.image}">`;
        nombre.textContent = personaje.name;
        estatus.textContent = personaje.status;
        ultimoLugarVisto.textContent = personaje.location.name;
        vistoPrimeraVez.textContent = personaje.episode[0].name;

        
    });
}