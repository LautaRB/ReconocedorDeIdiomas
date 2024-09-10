//const funciones = require('./reconocedor'); //Objeto
const {reconocerIdioma} = require('./reconocedor'); //Desestructuración del objeto

//Leer archivo de texto y normalizar la cadena
//const texto = "Este programa se tiene que arreglar porque da que todo esta escrito en ingles y no puede ser";
const texto = "was a swing band leader and leading figure in black British music of the 1930s and 1940s. Born in British Guiana, he was educated in Britain and travelled to New York to immerse himself in the Harlem jazz scene. He returned to Britain and established the Aristocrats (or Emperors) of Jazz, a mainly black swing band, with Leslie Thompson. In 1937 Johnson took control of the band through a legal loophole, causing the departure of Thompson and several musicians. Johnson filled the vacancies with Caribbean musicians, the band's popularity grew, and it changed its name to the West Indian Dance Orchestra. In 1938 the band broadcast on BBC Radio, recorded their first discs and appeared in an early television broadcast. Johnson was considered a pioneer for black musical leaders in the UK.";
//const texto = "LALA";

let textoArreglado = texto.toLowerCase().replace(/[^a-z]/g, ""); //Replace --> expresión regular

let elIdioma = reconocerIdioma(textoArreglado);

console.log(`El texto esta en ${elIdioma}`);

