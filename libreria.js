//VARIABLES 
let librosColeccion = [
    {
        'Nombre': 'La Biblia',
        'Cantidad_pag': 4138 ,
        'Autor': 'Dios',
        'Género': ['Historico', 'Poético', 'Profético', 'Libro Sagrado', 'Parábolas'],
        'Disponible': true
    },
    {
        'Nombre': 'juego de tronos (1996)',
        'Cantidad_pag': 800 ,
        'Autor': ' George R. R. Martin',
        'Género': ['Novela', 'Literatura fantástica', 'Alta fantasía'],
        'Disponible': true
    },
    {
        'Nombre': 'Matar a un Ruiseñor',
        'Cantidad_pag': 288 ,
        'Autor': 'Harper Lee',
        'Género': [ 'Novela gráfica'],
        'Disponible': false
    }
]

let nuevoLibro = {
    'Nombre': '',
    'Cantidad_Pag': 0,
    'Autor': ' ',
    'Género':[ ],
    'Disponible': false
}

console.log(imprimirLibros(nuevoLibro)) //nuevoLibro sin el valor agregado

//ELEMENTOS DE UN ARREGLO (PRUEBA DE ASIGNACIÓN DE VALORES A UN OBJETO DE FORMA EXTERNA)
nuevoLibro.Nombre= 'El principito';
nuevoLibro.Cantidad_Pag= 120;
nuevoLibro.Autor= 'Antoine de Saint-Exupéry';
nuevoLibro.Género= ['Novela corta', 'Literatura infantil', 'Fábula', 'Ficción especulativa'];
nuevoLibro.Disponible = true;

//FUNCIONES SECUNDARIAS

function disponible(libro){ //FUNCION DE DISPONIBILIDAD
    let generos = ' ';
    let mensaje;
    for (let index = 0; index < libro.Género.length; index++) {
         generos = generos + libro.Género[index] + ', ';
    }
    if(libro.Género.length > 1){
        mensaje =  mensaje = `${libro.Nombre} es un libro que contiene ${libro.Cantidad_pag} fue escrito por ${libro.Autor}, posee los géneros ${generos} y actualmente se encuentra disponible.`;
    } else {
        mensaje =  mensaje = `${libro.Nombre} es un libro que contiene ${libro.Cantidad_pag} fue escrito por ${libro.Autor}, posee el género ${generos} y actualmente se encuentra disponible.`;
    }
    return mensaje;
}

function noDisponible(libro){ //FUNCION DE INDISPONIBILIDAD
    let generos = ' ';
    let mensaje;
    for (let index = 0; index < libro.Género.length; index++) {
      generos = generos + libro.Género[index] + ', ';
     }
    if(libro.Género.length > 1){
       mensaje =  mensaje = `${libro.Nombre} es un libro que contiene ${libro.Cantidad_pag} fue escrito por ${libro.Autor}, posee los géneros ${generos} y actualmente no se encuentra disponible.`;
   } else {
       mensaje =  mensaje = `${libro.Nombre} es un libro que contiene ${libro.Cantidad_pag} fue escrito por ${libro.Autor}, posee el género ${generos} y actualmente no se encuentra disponible.`;
   }
   return mensaje;
}

//FUNCIONES PRINCIPALES DEL PROYECTO
function informacionLibro(libro){
    let mensaje;
    //CONDICIONAL QUE DISPARAR UN MENSAJE DEPENDIENDO SI ESTA DISPONIBLE O NO
    if (libro.Disponible == true){
        mensaje = disponible(libro);
     } else {
        mensaje = noDisponible(libro);
     }
     return mensaje;
}

function imprimirLibros(libro){ //IMPRIMIR INFORMACIÓN
    let mensaje = `${libro.Nombre}. `; 
    return mensaje;
}

function agregarLibros(newlibro){ //AGREGAR NUEVO LIBRO
    return librosColeccion.push(newlibro);
}

agregarLibros(nuevoLibro);

for (let index = 0; index < librosColeccion.length; index++) {
    console.log (imprimirLibros(librosColeccion[index]));
    console.log(' ');
}

for (let index = 0; index < librosColeccion.length; index++) {
    console.log (informacionLibro(librosColeccion[index]));
    console.log(' ');
}