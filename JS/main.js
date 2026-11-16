/* Funciones para lugares.html */
const buscador = document.getElementById("buscador-lugares");
const lugares = document.querySelectorAll(".lugares-main .lugar");
const cantidadResultados = document.getElementById("cantidad-resultados");

buscador.addEventListener("input", () => {
  const textoBuscado = buscador.value.toLowerCase().trim();
  let cantidadVisibles = 0;

  lugares.forEach((lugar) => {
    const titulo = lugar.querySelector("h3").textContent.toLowerCase();

    if (titulo.includes(textoBuscado)) {
      lugar.classList.remove("d-none");
      cantidadVisibles++;
    } else {
      lugar.classList.add("d-none");
    }
  });
  if (cantidadVisibles === 0) {
    cantidadResultados.textContent = "No se encontraron lugares";
  } else if (cantidadVisibles === 1) {
    cantidadResultados.textContent = "Mostrando 1 lugar";
  } else {
    cantidadResultados.textContent = `Mostrando ${cantidadVisibles} lugares`;
  }
});
/* Funciones para lugares.html */
