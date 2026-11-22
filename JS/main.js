/* Funciones para lugares.html */
const buscador = document.getElementById("buscador-lugares");
const lugares = document.querySelectorAll(".lugares-main .lugar");
const cantidadResultados = document.getElementById("cantidad-resultados");

if (buscador) {
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
}
/* Funciones para lugares.html */


/*Funciones para index.html */
const emailNewsletter = document.getElementById("email-newsletter");
const btnNewsletter = document.getElementById("btn-newsletter");
const mensajeNewsletter = document.getElementById("mensaje-newsletter");

if (btnNewsletter) {
  btnNewsletter.addEventListener("click", () => {
    const email = emailNewsletter.value.trim();

    if (email === "") {
      mensajeNewsletter.textContent = "Por favor ingresa un correo electronico.";
    } else if (email.includes("@") && email.length > 3) {
      mensajeNewsletter.textContent = "Te suscribiste al Newsletter exitosamente.";
      emailNewsletter.value = "";
    } else {
      mensajeNewsletter.textContent = "Ingresa un correo electronico valido.";
    }
  });
}

