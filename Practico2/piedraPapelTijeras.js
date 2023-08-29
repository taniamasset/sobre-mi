// Obtener referencias a elementos del DOM
const botonComenzar = document.getElementById("comenzar");
const botonLimpiarJuego = document.getElementById("limpiarJuego");
const nombreUsuario = document.getElementById("nombre");
const opcionesJugador = document.querySelectorAll(".opcion");
const opcionesComputadora = ["piedra", "papel", "tijera"];
var ganadasCompu = 0;
var ganadasUsuario = 0;

// Listener para el botón "Comenzar"
botonComenzar.addEventListener("click", () => {
    // Obtener el nombre del jugador y validar
    const nombreJugador = nombreUsuario.value.trim();
    if (nombreJugador === "") {
        alert("Ingresa un nombre válido por favor");
        return;
    }

    // Mostrar mensaje de bienvenida
    alert("Hola " + nombreJugador + ", ya puedes elegir tu opción");

    // Agregar listeners a las opciones de juego
    opcionesJugador.forEach(element => {
        element.addEventListener("click", () => {
            // Obtener la opción seleccionada por el jugador y generar una opción para la computadora
            const opcionJugador = element.id;
            const opcionComputadora = opcionesComputadora[Math.floor(Math.random() * 3)];
            alert("Opción compu: " + opcionComputadora);

            // Verificar el resultado del juego
            if (
                (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
                (opcionJugador === "papel" && opcionComputadora === "piedra") ||
                (opcionJugador === "tijera" && opcionComputadora === "papel")
            ) {
                ganadasUsuario++;
            } else if (opcionJugador !== opcionComputadora) {
                ganadasCompu++;
            }

            // Actualizar el resultado en el DOM y mostrar el resultado
            document.getElementById("resultado").innerHTML =
                "Resultado: " + nombreJugador + ": " + ganadasUsuario + " - Compu: " + ganadasCompu;

            document.getElementById("resultado").classList.add("mostrar");

            // Verificar si el juego ha terminado
            if (ganadasCompu === 3 || ganadasUsuario === 3) {
                if (ganadasCompu === 3)
                    alert("Juego finalizado, ganó la compu");
                else
                    alert("Juego finalizado, ganó: " + nombreJugador);

                // Reiniciar marcadores
                ganadasCompu = 0;
                ganadasUsuario = 0;
                document.getElementById("resultado").innerHTML = "";
            }
        });
    });
});

// Listener para el botón "Limpiar Juego"
botonLimpiarJuego.addEventListener("click", () => {
    // Recargar la página para reiniciar el juego
    location.reload();
    // Ocultar el resultado
    document.getElementById("resultado").classList.remove("mostrar");
});