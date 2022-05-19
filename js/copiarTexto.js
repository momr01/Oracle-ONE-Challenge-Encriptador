btnCopiarTexto.addEventListener("click", () => {
  navigator.clipboard.writeText(mostrarResultado.textContent);

  mostrarResultado.classList.add("resultado-texto-copiar");
  setTimeout(() => {
    mostrarResultado.classList.remove("resultado-texto-copiar");
  }, 3000);
});
