//const funciones = require('./reconocedor'); //Objeto
const {reconocerIdioma} = require('./reconocedor'); //Desestructuración del objeto

//Leer archivo de texto y normalizar la cadena
const texto = "Este programa se tiene que arreglar porque da que todo esta escrito en ingles y no puede ser";

let textoArreglado = texto.toLowerCase().replace(/[^a-z]/g, ""); //Replace --> expresión regular

let elIdioma = reconocerIdioma(textoArreglado);

console.log(`El texto esta en ${elIdioma}`);

