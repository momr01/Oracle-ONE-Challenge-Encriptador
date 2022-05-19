//formulario
const form = document.querySelector("#form-encriptar-desencriptar");
const input = document.querySelector("#texto-modificar");
const outputContainer = document.querySelector(".resultado-container");
const mostrarResultado = document.querySelector("#mostrar-resultado");
const mostrarImagen = document.querySelector("#mostrar-imagen");
const mensajeError = document.querySelector("#error-texto");

//botones
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiarTexto = document.querySelector("#btn-copiar-texto");
const btnCopiarTextoContainer = document.querySelector(
  "#resultado-btn-copiar-container"
);

//arrays - objects
const vocales = ["a", "e", "i", "o", "u"];
const cambios = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
