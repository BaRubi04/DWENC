const libros = new Map();     
const usuarios = new Map();   
const titulos = new Set();    
const emails = new Set();     
const prestamos = new Map();
const librosPorUsuario = new Map();
const historialPorCategoria = {};

function normalizar(texto) {//para comparar
  let resultado = String(texto).trim().toLowerCase();
  return resultado;
}

// Libros

function agregarLibro(id, titulo, autor, anio, categoria) {
  if (libros.has(id)) {
    console.log("Error: ya existe un libro con id " + id);
    return false;
  }

  const tituloNormalizado = normalizar(titulo);
  if (titulos.has(tituloNormalizado)) {
    console.log("Error: ya existe el libro " + titulo);
    return false;
  }

  const libro = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    categoria: categoria,
  };

  libros.set(id, libro);
  titulos.add(tituloNormalizado);
  return true;
}

function buscarLibro(texto) {
  const textoBuscado = normalizar(texto);
  const encontrados = [];

  for (const libro of libros.values()) {
    const titulo = normalizar(libro.titulo);
    const autor = normalizar(libro.autor);

    if (titulo.includes(textoBuscado) || autor.includes(textoBuscado)) {
      encontrados.push(libro);
    }
  }

  return encontrados;
}

function listarLibrosDisponibles() {
  const disponibles = [];

  for (const libro of libros.values()) {
    const estaPrestado = prestamos.has(libro.id);
    if (estaPrestado === false) {
      disponibles.push(libro);
    }
  }

  return disponibles;
}

function librosPorCategoria() {
  const grupos = {};

  for (const libro of libros.values()) {
    const categoria = libro.categoria;

    if (grupos[categoria] === undefined) {
      grupos[categoria] = [];
    }

    grupos[categoria].push(libro);
  }

  return grupos;
}

// Usuarios

function registrarUsuario(id, nombre, email) {
  if (usuarios.has(id)) {
    console.log("Error: ya existe un usuario con id " + id);
    return false;
  }

  const emailNormalizado = normalizar(email);
  if (emails.has(emailNormalizado)) {
    console.log("Error: el email " + email + " ya está registrado");
    return false;
  }

  const usuario = {
    id: id,
    nombre: nombre,
    email: email,
  };

  usuarios.set(id, usuario);
  emails.add(emailNormalizado);
  librosPorUsuario.set(id, new Set());
  return true;
}

function listarUsuarios() {
  const lista = [];

  for (const usuario of usuarios.values()) {
    lista.push(usuario);
  }

  return lista;
}

// Prestamos

function prestarLibro(idLibro, idUsuario, fecha) {
  const libro = libros.get(idLibro);

  if (libro === undefined) {
    console.log("Error: no existe el libro " + idLibro);
    return false;
  }

  if (usuarios.has(idUsuario) === false) {
    console.log("Error: no existe el usuario " + idUsuario);
    return false;
  }

  if (prestamos.has(idLibro)) {
    console.log("Error: el libro " + libro.titulo + " ya está prestado");
    return false;
  }

  const prestamo = {
    idUsuario: idUsuario,
    fecha: fecha,
  };
  prestamos.set(idLibro, prestamo);

  const librosDelUsuario = librosPorUsuario.get(idUsuario);
  librosDelUsuario.add(idLibro);

  const categoria = libro.categoria;
  if (historialPorCategoria[categoria] === undefined) {
    historialPorCategoria[categoria] = 0;
  }
  historialPorCategoria[categoria] = historialPorCategoria[categoria] + 1;

  return true;
}

function devolverLibro(idLibro) {
  const prestamo = prestamos.get(idLibro);

  if (prestamo === undefined) {
    console.log("Error: el libro " + idLibro + " no está prestado");
    return false;
  }

  const librosDelUsuario = librosPorUsuario.get(prestamo.idUsuario);
  librosDelUsuario.delete(idLibro);
  prestamos.delete(idLibro);
  return true;
}

function librosDeUsuario(idUsuario) {
  const resultado = [];
  const idsDeLibros = librosPorUsuario.get(idUsuario);

  if (idsDeLibros === undefined) {
    console.log("Error: no existe el usuario " + idUsuario);
    return resultado; // lista vacía
  }

  for (const idLibro of idsDeLibros) {
    const libro = libros.get(idLibro);
    const prestamo = prestamos.get(idLibro);

    resultado.push({
      titulo: libro.titulo,
      autor: libro.autor,
      categoria: libro.categoria,
      fechaPrestamo: prestamo.fecha,
    });
  }

  return resultado;
}

// Consultas

function librosPrestados() {
  const resultado = [];

  for (const [idLibro, prestamo] of prestamos) {
    const libro = libros.get(idLibro);
    const usuario = usuarios.get(prestamo.idUsuario);

    resultado.push({
      titulo: libro.titulo,
      prestadoA: usuario.nombre,
      fecha: prestamo.fecha,
    });
  }

  return resultado;
}

function usuariosConPrestamos() {
  const resultado = [];

  for (const [idUsuario, idsDeLibros] of librosPorUsuario) {
    if (idsDeLibros.size > 0) {
      const usuario = usuarios.get(idUsuario);
      resultado.push(usuario);
    }
  }

  return resultado;
}

function prestamosPorCategoria() {
  const actuales = {};

  for (const idLibro of prestamos.keys()) {
    const categoria = libros.get(idLibro).categoria;

    if (actuales[categoria] === undefined) {
      actuales[categoria] = 0;
    }
    actuales[categoria] = actuales[categoria] + 1;
  }

  const resultado = {
    actuales: actuales,
    historico: historialPorCategoria,
  };

  return resultado;
}