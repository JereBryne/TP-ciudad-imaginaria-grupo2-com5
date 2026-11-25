/* Buscador de la página lugares.html */
const buscador = document.getElementById("buscador-lugares");
const lugares = document.querySelectorAll(".lugares-main .lugar");
const cantidadResultados = document.getElementById("cantidad-resultados");

// Solo se ejecuta en lugares.html si existe el buscador (fue necesario porque se tuvo que enlazar el main.js en todas las páginas por el selector de tema)
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

    if (cantidadResultados) {
      if (cantidadVisibles === 0) {
        cantidadResultados.textContent = "No se encontraron lugares";
      } else if (cantidadVisibles === 1) {
        cantidadResultados.textContent = "Mostrando 1 lugar";
      } else {
        cantidadResultados.textContent = `Mostrando ${cantidadVisibles} lugares`;
      }
    }
  });
}

/* Selector de tema (auto / oscuro / claro) */
const botonesTema = document.querySelectorAll("[data-tema]");
const raizHtml = document.documentElement;
const mediaQuerySistema = window.matchMedia("(prefers-color-scheme: dark)");

if (botonesTema.length > 0) {
  // Aplica el tema en el HTML y marca el botón seleccionado
  const aplicarTema = (modo) => {
    const temaEfectivo =
      modo === "auto" ? (mediaQuerySistema.matches ? "dark" : "light") : modo;

    raizHtml.setAttribute("data-bs-theme", temaEfectivo);

    botonesTema.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tema === modo);
    });
  };

  // Carga el tema guardado en localStorage o usa auto por defecto
  const temaInicial = localStorage.getItem("tema") || "auto";
  aplicarTema(temaInicial);

  // Escucha si el sistema operativo cambia de tema (solo si está en auto)
  mediaQuerySistema.addEventListener("change", () => {
    const temaActual = localStorage.getItem("tema") || "auto";
    if (temaActual === "auto") {
      aplicarTema("auto");
    }
  });

  // Evento click para cambiar de tema y guardarlo en el navegador
  botonesTema.forEach((boton) => {
    boton.addEventListener("click", () => {
      const temaElegido = boton.dataset.tema;
      localStorage.setItem("tema", temaElegido);
      aplicarTema(temaElegido);
    });
  });
}
/* Newsletter de index.html */
const emailNewsletter = document.getElementById("email-newsletter");
const btnNewsletter = document.getElementById("btn-newsletter");
const mensajeNewsletter = document.getElementById("mensaje-newsletter");

if (btnNewsletter) {
  btnNewsletter.addEventListener("click", () => {
    const email = emailNewsletter.value.trim();

    if (email === "") {
      mensajeNewsletter.textContent =
        "Por favor ingresa un correo electronico.";
    } else if (email.includes("@") && email.length > 3) {
      mensajeNewsletter.textContent =
        "Te suscribiste al Newsletter exitosamente.";
      emailNewsletter.value = "";
    } else {
      mensajeNewsletter.textContent =
        "Ingresa un correo electronico valido.";
    }
  });
}

/*Funciones para contacto.html*/
const formVisados = document.getElementById("formVisados");
const mensajeForm = document.getElementById("mensaje-form");
if (mensajeForm && formVisados){
  formVisados.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formVisados.checkValidity()) {
      formVisados.classList.add("was-validated");
      mensajeForm.textContent = "Por favor completá todos los campos obligatorios.";
      mensajeForm.className = "text-danger mt-2";
      return;
    }
      mensajeForm.textContent = "¡Formulario enviado exitosamente!";
      mensajeForm.className = "text-success mt-2";
      formVisados.reset();
  });
}