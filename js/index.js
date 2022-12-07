alert("Si jalo el script");

var personas = ["Guillermo", "Josue", "Chino", "Axel", 176];

// Objetos
var Datos = {
    Nombre: "Samuel",
    Apellido: "Garcia",
    Edad: 21,
    Correo: "samuelgarciacontreras1@gmail.com"
}

//Otro tipo de objetos
class miClase {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Otro tipo de objetos
let variable = {
    nombre: "Asus",
    ram: "8gb"
}

let nombre = variable.nombre;
let ram = variable.ram;

let frase = `Mi computadora ${variable.nombre} tiene ${variable.ram} de ram.`

//Mas datos

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

articulos.forEach((valor) => {
    console.log(valor.nombre);
})

//Fitro (ejemplo como para la pagina)

var articulosCaros = articulos.filtrer((valor) => {
    if (valor.costo > 2000)
        return valor;
})

//Mapeo
var articulosDescuento = articulos.map((articulo) => {
    return { nombre: articulo.nombre, costo: articulo.costo * 0.8 };
})

//Funciones
function laFuncion(variabl1) {
    return variabl1 * 2;
}

(variabl1) => { return variabl1 * 2 }

variabl1 => { return variabl1 * 2 }

variabl1 => variabl1 * 2;

() => variabl1 * 2;