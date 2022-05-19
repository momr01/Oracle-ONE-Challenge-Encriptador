function validarTexto(texto) {
  //solo letras, no mayusculas
  const soloLetras = new RegExp("^[a-z ]+$");
  let isValid;

  if (soloLetras.test(texto)) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

function comprobarYMostrar(accion, texto) {
  const esValido = validarTexto(texto);
  if (esValido) {
    let resultado;
    mensajeError.classList.remove("formulario-mostrar-error");
    mostrarOutputBoton();
    if (accion == "encriptar") {
      resultado = encriptar(texto);
    } else if (accion == "desencriptar") {
      resultado = desencriptar(texto);
    }

    mostrarResultado.textContent = resultado;
    form.reset();
  } else {
    mensajeError.classList.add("formulario-mostrar-error");
    mostrarResultado.textContent = "";
    btnCopiarTextoContainer.classList.remove("resultado-btn-container");
    btnCopiarTextoContainer.classList.add("hide");
  }
  ajustarHeightInput();
}
