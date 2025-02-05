document.addEventListener("DOMContentLoaded", () => {
    let nombres = [];

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

    function agregarAmigo() {
        let input = document.getElementById("amigo");
        let nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    }

    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        nombres.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("La lista está vacía, agrega nombres primero.");
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let ganador = nombres[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: ${ganador}</li>`;
    }
});
