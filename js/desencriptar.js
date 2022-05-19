btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();

  const texto = input.value;
  comprobarYMostrar("desencriptar", texto);
});

function desencriptar(string) {
  //recorro cada palabra que corresponde a vocal encriptada
  for (let i = 0; i < Object.keys(cambios).length; i++) {
    //largo de palabra
    let lengthPalabra = cambios[vocales[i]].length;

    //busco la palabra en el string. Si la encuentra devolverá !=-1 y entrará al ciclo
    let indexPalabra = string.indexOf(`${cambios[vocales[i]]}`);

    /**
     * mientras encuentre la palabra, actualizaré el string; el cual llevará todo lo que haya antes de la palabra + la nueva expresion + todo lo que haya despues.
     * Y luego de ese cambio volvere a preguntar si existe la palabra en el string para volver a hacer lo mismo o salir del ciclo
     */
    while (indexPalabra != -1) {
      string =
        string.slice(0, indexPalabra) +
        vocales[i] +
        string.slice(indexPalabra + lengthPalabra);
      indexPalabra = string.indexOf(`${cambios[vocales[i]]}`);
    }
  }

  return string;
}
