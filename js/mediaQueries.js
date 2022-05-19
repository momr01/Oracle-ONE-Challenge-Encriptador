window.addEventListener("load", () => {
  const widthPantallaCelular = window.matchMedia("(max-width: 480px)");
  const widthPantallaTablet = window.matchMedia("(max-width: 950px)");
  if (widthPantallaCelular.matches || widthPantallaTablet.matches) {
    input.style.cssText = `height: ${input.scrollHeight}px; overflow-y: hidden`;
    input.addEventListener("input", () => {
      input.style.height = "auto";
      input.style.height = `${input.scrollHeight}px`;
    });
  }
});

//ajustar textarea
function ajustarHeightInput() {
  const widthPantallaCelular = window.matchMedia("(max-width: 480px)");
  const widthPantallaTablet = window.matchMedia("(max-width: 950px)");
  if (widthPantallaCelular.matches || widthPantallaTablet.matches) {
    input.style.cssText = "height: auto;";
  }
}

//mostrar boton de copiar
function mostrarOutputBoton() {
  mostrarImagen.classList.add("hide");
  btnCopiarTextoContainer.classList.remove("hide");
  btnCopiarTextoContainer.classList.add("resultado-btn-container");
}
