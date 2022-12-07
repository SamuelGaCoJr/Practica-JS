let amigos = [];

let btnGuardar = document.querySelector("#btnGuardar");

let btnCancelar = document.querySelector("#btnCancelar");

let lista = document.querySelector(".listaAmigos");

let formulario = document.querySelector("#formulario");

pintar();

// Con esta funcion limpia todos los datos a ingresar

function limpiar() {
    formulario[0].value = "";
    formulario[1].value = "";
    formulario[2].value = "";
    formulario[3].value = "";
}

btnCancelar.addEventListener("click", () => {
    limpiar();
    event.preventDefault();
})

// Funcion de mostrar los datos ingresados

function pintar() {
    if (amigos.length > 0) {
        lista.innerHTML = "";
        amigos.forEach((contacto, index) => {
            let amigo = document.createElement("div");
            amigo.innerHTML = `<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}">Detalles</button><button class="eliminarContacto" indice="${index}">Eliminar</button>`;
            lista.appendChild(amigo);
        });
        let botones = document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                showDetalles(element.children[0].value);
            });
        }
        botones = document.getElementsByClassName("eliminarContacto");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                amigos.splice(element.getAttribute("indice"),1);
                pintar();
            });
        }
    }
    else {
        lista.innerHTML = "<h2>No tenemos amigos</h2>"
    }
}

//Quitar un atributo

function showDetalles(tel) {
    let detalles = document.getElementById("detallesAmigo");
    let amigo = amigos.find(a => {
        if (a.telefono == tel) {
            return a;
        }
    });
    detalles.innerHTML = `<img src="${amigo
        .foto}" alt="">
    <h3>${amigo
        .nombre}</h3>
        <p><span>Teléfono: </span>${amigo
        .telefono}</p>
        <p><span>Correo: </span>${amigo
        .correo}</p>
        <button id="cerrar">Cerrar</button>`;
        detalles.classList.remove("oculto");
        cerrarDetalles();
}
//Esta funcion cierra los detalles

function cerrarDetalles() {
    let esconder = document.getElementById("cerrar");
    esconder.addEventListener ("click", ocultar =>
    {
        let detallesPersona = document.getElementById("detallesAmigo")
        detallesPersona.classList.add("oculto");
    });
}

// Con evento guarda los datos ingresados

btnGuardar.addEventListener("click", (event) => {

    let contacto = {
        nombre: formulario["nombre"].value,
        telefono: formulario["telefono"].value,
        correo: formulario["correo"].value,
        foto: formulario["foto"].value
    };
    if(contacto.nombre ==""||contacto.telefono==""||contacto.correo==""||contacto.foto==""){
//FALTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        // function alerta() {
        //     let alerta1 = document.getElementsByClassName("alerta1");
        //     alerta1.innerHTML = `<div class="alerta1"><label>Rellena todos los campos</label></div>`
        // }
        // alerta.fadeIn(200);
        // alerta.fadeOut(200);

    }
    else{
        amigos.push(contacto);
        limpiar();
        pintar();
        event.preventDefault();
    }

})

//Validacion de un telefono repetido



//Funcion que elimine una fila de un arreglo


