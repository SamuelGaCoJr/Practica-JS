// let nombres = ["Guillermo", "Josue", "Chino", "Arely", "Samuel"];

let nombres = [{
        nombre: "Guillermo",
        edad: 37,
        sexo: "M"
    },
    {
        nombre: "Josue",
        edad: 22,
        sexo: "M"
    },
    {
        nombre: "Chino",
        edad: 20,
        sexo: "M"
    },
    {
        nombre: "Arely",
        edad: 21,
        sexo: "F"
    },
    {
        nombre: "Samuel",
        edad: 21,
        sexo: "M"
    }
];

// Esto es un filtro en el que los hombres que tengan menos de 25 anios se muestran
let hombresJovenes = nombres.filter(persona => {
    if (persona.sexo == "M" && persona.edad < 25) {
        console.log("La persona con nombre " + persona.nombre + " bla bla bla")
        return persona;
    }
})

// Solo manda saludos xD
let saludos = nombres.map(persona => {
    return `Hola ${persona.nombre} tu edad es de ${persona.edad}`;
})

//Esto es una condicion en la que si la persona  tiene mas de 30 anios su sueldo es de 10000
let sueldo = nombres.map(persona => {
    let sueldo = 0;
    if (persona.edad > 30) {
        sueldo = 10000
    }
    return { nombre: persona.nombre, sueldo: sueldo };
})

//Busca algo que contenga ciertas palabras o letras
let incluyeAlgo = nombres.find(persona => {
    if (persona.nombre.includes("Chi")) {
        return true;
    }
})

nombres.forEach(persona => {
    console.log(persona.nombre);
})

let hayMayores = nombres.some(persona => {
    if (persona.edad > 30) {
        return true;
    }
})

// Estos son eventos para hacer con HTML Y CSS
let contenedor = document.getElementById("contenedor");
let input = document.querySelector("#input");
let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", () => {
    contenedor.innerText = input.value;
    contenedor.className = "sombreado";
})

input.addEventListener("keyup", () => {
    if (input.value.length > 3) {
        contenedor.innerText = input.value;
        contenedor.className = "exito";
    } else {
        contenedor.innerText = "Texto invalido";
        contenedor.className = "falla";
    }
})