let grupo = {
    futbolistas: [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
    ],

    filtrarMasDe20Goles: function(){
        let filtrado = this.futbolistas.filter(element => element.goles > 20);
        filtrado.forEach(function(element){
            console.log("nombre:" + element.nombre)
        });
    },

    totalGoles: function(){
        console.log("Goles totales: " + this.futbolistas.reduce((acc, val) => acc + val.goles, 0));
    },

    ordenarPorAsistencias: function(){
        this.futbolistas.sort((a,b) => b.asistencias - a.asistencias);
        this.futbolistas.forEach(function(element){
            console.log(
                "nombre:" + element.nombre + 
                "\nequipo:" + element.equipo +
                "\nposicion:" + element.posicion +
                "\ngoles:" + element.goles +
                "\nasistencias:" + element.asistencias +
                "\npartidosJugados:" + element.partidosJugados +
                "\ntarjetaAmarilla:" + element.tarjetaAmarilla +
                "\ntarjetaRoja:" + element.tarjetaRoja 
            )
        });
    },

    contarTarjetasPorEquipo: function(){
        let sumaAmarillas = 0, sumaRojas = 0, equipoAnalizar = [], existe;

        for(i = 0; i < this.futbolistas.length; i++){
            if(!equipoAnalizar.includes(this.futbolistas[i].equipo)){//Comprobar si el equipo no está en el array
                existe = false;
                equipoAnalizar[i] = this.futbolistas[i].equipo;//Se establece el equipo del cual se contarán tarjetas
            }
            for(j = 0; j < this.futbolistas.length && existe == false; j++){
                if(equipoAnalizar[i] == this.futbolistas[j].equipo){
                    sumaAmarillas += this.futbolistas[j].tarjetaAmarilla;
                    sumaRojas += this.futbolistas[j].tarjetaRoja;
                }
            }
            if(!existe){//Si no se repite el equipo, visualizar tarjetas
                console.log("Amarillas del "+this.futbolistas[i].equipo+": "+sumaAmarillas+
                            "\nRojas del "+this.futbolistas[i].equipo+": "+sumaRojas);
            }
        }
    },

    promedioGoles: function(){
        this.futbolistas.forEach(element => {
            let promedio = element.goles / element.partidosJugados;
            console.log(element.nombre+": "+promedio);
        });
    },

    jugadorConMasAsistencias: function(){
        let mayor = 0, nombre = "";
        this.futbolistas.forEach(element => {
            if(element.asistencias > mayor){
                mayor = element.asistencias;
                nombre = element.nombre;
            }
        });
        console.log(nombre+": "+mayor+" asistencias");
    },

    listarJugadoresPorPosicion: function(){
        let posiciones = ["Mediocampista","Defensa","Delantero","Portero"];
        for(let i = 0; i < posiciones.length; i++){
            console.log(posiciones[i]+": "); // Va mostrando jugadores según posición
            this.futbolistas.forEach(element => {
                if(element.posicion === posiciones[i])
                    console.log("\t"+element.nombre);
            })
        }
    }
};