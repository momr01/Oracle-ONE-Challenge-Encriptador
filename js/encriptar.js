btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();

  const texto = input.value;
  comprobarYMostrar("encriptar", texto);
});

function encriptar(texto) {
  //convierto string de input en array
  let textoDividido = texto.split("");

  //aplico a array reglas de encriptacion
  let textoModificado = reglasEncriptado(textoDividido);

  //convierto array en string
  let textoEncriptado = textoModificado.join("");

  return textoEncriptado;
}

function reglasEncriptado(array) {
  /**
   * para una letra del array, comparo con cada vocal. Si hay coincidencia, modifico la letra del array y salgo del ciclo de vocales para continuar con siguiente letra
   */

  for (let i = 0; i < array.length; i++) {
    for (let z = 0; z < vocales.length; z++) {
      if (array[i] == vocales[z]) {
        array[i] = cambios[vocales[z]];
        z += vocales.length;
      }
    }
  }

  return array;
}
