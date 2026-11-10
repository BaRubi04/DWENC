const jugadores = [
  {
    nombre: "Lionel Messi",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 26,
    partidosJugados: 30,
    fechaNacimiento: "1987-06-24",
    nacionalidad: "Argentina",
    esInternacional: true,
    estadisticas: {
      asistencias: 17,
      faltasSufridas: 43,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 4,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 2700,
    },
  },
  {
    nombre: "Cristiano Ronaldo",
    equipo: "Manchester United",
    liga: "Premier League",
    posicion: "Delantero",
    golesMarcados: 22,
    partidosJugados: 27,
    fechaNacimiento: new Date("1985-02-05"),
    nacionalidad: "Portugal",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 31,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2500,
    },
  },
  {
    nombre: "Robert Lewandowski",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 37,
    partidosJugados: 28,
    fechaNacimiento: new Date("1988-08-21"),
    nacionalidad: "Polonia",
    esInternacional: true,
    estadisticas: {
      asistencias: 12,
      faltasSufridas: 27,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 6,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2650,
    },
  },
  {
    nombre: "Kylian Mbappé",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 19,
    partidosJugados: 28,
    fechaNacimiento: new Date("1998-12-20"),
    nacionalidad: "Francia",
    esInternacional: true,
    estadisticas: {
      asistencias: 14,
      faltasSufridas: 32,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2300,
    },
  },
  {
    nombre: "Neymar Jr.",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 21,
    partidosJugados: 29,
    fechaNacimiento: new Date("1992-02-05"),
    nacionalidad: "Brasil",
    esInternacional: true,
    estadisticas: {
      asistencias: 17,
      faltasSufridas: 39,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2600,
    },
  },
  {
    nombre: "Erling Haaland",
    equipo: "Borussia Dortmund",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 22,
    partidosJugados: 25,
    fechaNacimiento: new Date("2000-07-21"),
    nacionalidad: "Noruega",
    esInternacional: true,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 1,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2100,
    },
  },
  {
    nombre: "Kevin De Bruyne",
    equipo: "Manchester City",
    liga: "Premier League",
    posicion: "Mediocampista",
    golesMarcados: 10,
    partidosJugados: 28,
    fechaNacimiento: new Date("1991-06-28"),
    nacionalidad: "Belgica",
    esInternacional: true,
    estadisticas: {
      asistencias: 25,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2400,
    },
  },
  {
    nombre: "Virgil van Dijk",
    equipo: "Liverpool",
    liga: "Premier League",
    posicion: "Defensa",
    golesMarcados: 2,
    partidosJugados: 26,
    fechaNacimiento: new Date("1991-07-08"),
    nacionalidad: "Holanda",
    esInternacional: true,
    estadisticas: {
      asistencias: 2,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 4,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1900,
    },
  },
  {
    nombre: "Luis Alberto",
    equipo: "Lazio",
    liga: "Serie A",
    posicion: "Mediocampista",
    golesMarcados: 8,
    partidosJugados: 30,
    fechaNacimiento: new Date("1992-11-28"),
    nacionalidad: "España",
    esInternacional: false,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 5,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2200,
    },
  },
  {
    nombre: "Jadon Sancho",
    equipo: "Borussia Dortmund",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 12,
    partidosJugados: 25,
    fechaNacimiento: new Date("2000-03-25"),
    nacionalidad: "Inglaterra",
    esInternacional: true,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 10,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1900,
    },
  },
  {
    nombre: "Mauro Icardi",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 27,
    partidosJugados: 28,
    fechaNacimiento: new Date("1993-02-19"),
    nacionalidad: "Argentina",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2100,
    },
  },
  {
    nombre: "Raheem Sterling",
    equipo: "Manchester City",
    liga: "Premier League",
    posicion: "Delantero",
    golesMarcados: 20,
    partidosJugados: 30,
    fechaNacimiento: new Date("1994-12-08"),
    nacionalidad: "Inglaterra",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 4,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Leroy Sane",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 15,
    partidosJugados: 25,
    fechaNacimiento: new Date("1996-01-11"),
    nacionalidad: "Alemania",
    esInternacional: true,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 10,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Ciro Immobile",
    equipo: "Lazio",
    liga: "Serie A",
    posicion: "Delantero",
    golesMarcados: 30,
    partidosJugados: 28,
    fechaNacimiento: new Date("1990-02-20"),
    nacionalidad: "Italia",
    esInternacional: true,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2200,
    },
  },
  {
    nombre: "Houssem Aouar",
    equipo: "Olympique Lyon",
    liga: "Ligue 1",
    posicion: "Mediocampista",
    golesMarcados: 5,
    partidosJugados: 25,
    fechaNacimiento: new Date("1998-06-30"),
    nacionalidad: "Francia",
    esInternacional: false,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Tanguy Ndombele",
    equipo: "Tottenham Hotspur",
    liga: "Premier League",
    posicion: "Mediocampista",
    golesMarcados: 8,
    partidosJugados: 25,
    fechaNacimiento: new Date("1996-12-28"),
    nacionalidad: "Francia",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 18,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1600,
    },
  },
  {
    nombre: "Gianluigi Donnarumma",
    equipo: "AC Milan",
    liga: "Serie A",
    posicion: "Portero",
    golesMarcados: 0,
    partidosJugados: 27,
    fechaNacimiento: new Date("1999-02-25"),
    nacionalidad: "Italia",
    esInternacional: true,
    estadisticas: {
      asistencias: 0,
      faltasSufridas: 5,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 1,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2700,
    },
  },
  {
    nombre: "Serge Gnabry",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 20,
    partidosJugados: 26,
    fechaNacimiento: new Date("1995-07-14"),
    nacionalidad: "Alemania",
    esInternacional: true,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Thomas Muller",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Mediocampista",
    golesMarcados: 15,
    partidosJugados: 25,
    fechaNacimiento: new Date("1989-09-13"),
    nacionalidad: "Alemania",
    esInternacional: true,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1500,
    },
  },
]

/**
 * Ejercicio 1.
 * Crea una funcion que muestre por consola los nombres de los jugadores con posicion 'Mediocampista'
 * @return NO
 */

    //jugadoresMedioCampistas = () => console.log(jugadores.filter(jugador => jugador.posicion === "Mediocampista"));    
    jugadoresMedioCampistas = () => {
      console.clear();/* He descubierto clear al pensar en una manera de limpiar la consola y poniendole el . a console */
      let filtrado = jugadores.filter(jugador => jugador.posicion === "Mediocampista");
      filtrado.forEach(jugador => console.log(jugador.nombre));
    }

/**
 * Ejercicio 2.
 * Crea una función que muestre por consola los nombres de lo jugadores que hayan jugado 30 o mas partidos.
 * @return NO
 */

    jugadores30OMasPartidos = () =>  {
      console.clear();
      let filtrado = jugadores.filter(jugador => jugador.partidosJugados >= 30);
      filtrado.forEach(jugador => console.log(jugador.nombre));
    }

/**
 * Ejercicio 3.
 * Crea una funcion que muestra los nombres de los jugadores que son internacionales.
 * @return NO
 */

    nombresJugadoresInternacionales = () => {
      console.clear();
      let filtrado = jugadores.filter(jugador => jugador.esInternacional == true);
      filtrado.forEach(jugador => console.log(jugador.nombre));
    }

/**
 * Ejercicio 4.
 * Crea una funcion que retorne los nombres de los jugadores que juegan en la 'Premier League'
 * @description
 * @param
 * @return Array nombres
 */
    let arrayNombres = [];/* Dado a que el ejercicio pide un parámetro, pondré el array fuera. 
    Empezará vacío cada vez que se ejecute el script ya que únicamente se manipula una copia local 
    Importante ponerlo como parámetro también en HTML!!*/
    nombresJugadoresPremierLeague = (arrayNombres) => {/* Se hará un console.log de la función en el html */
      console.clear();
      let filtrado = jugadores.filter(jugador => jugador.liga === "Premier League");/* Si está en la premier, meter como objeto entero en jugadoresPremier */
      filtrado.forEach(jugador => arrayNombres.push(jugador.nombre));/* Meter el nombre de cada jugadorPremier en el array */
      return arrayNombres;
    }

/**
 * Ejercicio 5.
 * Crea una funcion que devuelva todos los delanteros que juegan en la 'Ligue 1'
 * @return Array nombres
 */

    delanterosLigue1 = () => {/* Se hará un console.log de la función en el html */
      console.clear();
      let arrayNombres2 = [];
      let filtrado = jugadores.filter(jugador => jugador.liga === "Ligue 1");
      filtrado.forEach(jugador => arrayNombres2.push(jugador.nombre));
      return arrayNombres2;
    }

/**
 * Ejercicio 6. 
 * Crea una funcion que muestre por pantalla los nombres de los jugadores junto a las siguiente estadisticas: 'asistencias', 'faltasSufridas', 'minutosJugados'
 * @return NO
 */

    asistenciasFaltasYMinutosJugados = () => {
      console.clear();
      jugadores.forEach(jugador => console.log(
        jugador.nombre+": \n\t"+
          jugador.estadisticas.asistencias+" asistencias\n\t"+
          jugador.estadisticas.faltasSufridas+" faltas sufridas\n\t"+
          jugador.estadisticas.minutosJugados+" minutos jugados"
      ));
    }

/**
 * Ejercicio 7.
 * Crea una funcion que retorne los nombres de los jugadores que hayan recibido alguna tarjeta roja
 * @return array nombre
 */

    nombresJugadoresRoja = () => {/* Habrá un console log en html */
      let arrayNombre3 = [];
      let filtrado = jugadores.filter(jugador => jugador.estadisticas.tarjetas.some(tarjeta => tarjeta.tipo === "roja" && tarjeta.cantidad > 0));
      filtrado.forEach(jugador => arrayNombre3.push(jugador.nombre));
      return arrayNombre3;
    }

/**
 * Ejercicio 8.
 * Crea una funcion que devuelva los jugadores que son internacionales y que han jugado mas de 5 partidos 
 * @return NO
 */

  jugadoresInternacionalesMenosDe5Partidos = () => {
    console.clear();
    let filtrado = jugadores.filter(jugador => jugador.esInternacional == true && jugador.partidosJugados > 5);
    filtrado.forEach(jugador => console.log(jugador.nombre));
  }