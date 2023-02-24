let columnaActiva = 1;

const columnas = document.querySelectorAll(".columna");

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function () {
        cambiarColumna(indice);
    })
})

function cambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}