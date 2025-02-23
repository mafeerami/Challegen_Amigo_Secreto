// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let litaAmigos=[];
let amigoSecreto = 0;

//DOM 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja () {
    document.querySelector("#amigo").value= " ";
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === "") {
        asignarTextoElemento('#mensaje', 'Por favor, ingresa un nombre válido.');
        return;
    }
    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    limpiarCaja();
}
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach(function(amigo, index) {
        let item = document.createElement('li');
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('#mensaje', 'No hay amigos en la lista para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    amigoSecreto = listaAmigos[indiceAleatorio];
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigo) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let item = document.createElement('li');
    item.textContent = `El amigo secreto es: ${amigo}`;
    resultado.appendChild(item);
    asignarTextoElemento('#mensaje', 'Sorteo realizado con éxito.');
}

//Funciones iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del Amigo Secreto!');
    listaAmigos = [];
    amigoSecreto = "";
    actualizarListaAmigos();
    limpiarCaja();
}

condicionesIniciales();