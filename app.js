// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];

// Valida que el nombre no esté vacío
function validarIngreso(nombre) {
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return false;
    }
    return true;
}

// Agrega un amigo a la lista si es válido
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (!validarIngreso(nombre)) return;
    amigosIngresados.push(nombre);
    document.getElementById('amigo').value = ''; // Limpia el campo
    mostrarAmigos();
}

// Muestra la lista de amigos en pantalla
function mostrarAmigos() {
    document.getElementById('listaAmigos').textContent = amigosIngresados.join(', ');
}

// Sortea un amigo al azar
function sortearAmigo() {
    if (amigosIngresados.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigosIngresados.length);
    alert("El amigo sorteado es: " + amigosIngresados[indice]);
}
