const reconocerIdioma = (texto) => {
  let vecOcurrencias = crearVecOcurrencias(texto);

  const cod = codigoIdiomaConMenorError(vecOcurrencias);

  return cod; //Usar api de paises para mostrar el nombre del pais
};

const otra = () => {
  //Función de ejemplo
};

//Contar cant de ocurrencias de cada letra y meterlas en un vector
const crearVecOcurrencias = (texto) => {
  const vec = new Array(26).fill(0);

  [...texto].forEach((stringLength1) => {
    //No hay chars solo Strings o cadenas
    vec[stringLength1.charCodeAt(0) - 97]++; //Suma la cantidad de ocurrencias dependiendo de la pos (nro ascii) de la letra
  });

  return vec;
};

//Calcular el ECM
ES = [
  11.05, 0.87, 6.82, 4.77, 11.93, 1.18, 0.93, 0.37, 8.91, 0.24, 0.01, 5.65, 2.7,
  7.41, 9.51, 2.29, 0.78, 5.46, 8.14, 5.09, 4.21, 0.76, 0.01, 0.11, 0.7, 0.1,
];
EN = [
  7.81, 1.28, 2.93, 4.11, 13.05, 2.88, 1.39, 5.85, 6.77, 0.23, 0.42, 3.6, 2.62,
  7.28, 8.21, 2.15, 0.14, 6.64, 6.46, 9.02, 2.77, 1, 1.49, 0.3, 1.51, 0.09,
];
DE = [
  6.11, 1.87, 2.67, 5.56, 16.51, 1.48, 2.89, 4.15, 8.26, 0.26, 1.67, 3.4, 2.72,
  10.28, 3.03, 1.01, 0.02, 7.83, 6.27, 6.09, 4.48, 1.08, 1.2, 0.05, 0.08, 1.03,
];

const codigoIdiomaConMenorError = (vecOcurrencias) => {
  const sumatoria = vecOcurrencias.reduce((a, b) => a + b);

  //vecOcurrencias = vecOcurrencias.map((numAbsoluto, i) => Math.pow(ES[i] - (numAbsoluto /sumatoria), 2));
  let vecOcurrenciasES = vecOcurrencias.map((numAbsoluto, i) =>
    Math.pow(ES[i] - (numAbsoluto / sumatoria), 2)
  );
  const ecmES =
    //vecOcurrenciasES.reduce((a, b) => a + b) / vecOcurrenciasES.length;
    (vecOcurrenciasES.reduce((a, b) => (a + b)))/ vecOcurrenciasES.length;

  let vecOcurrenciasEN = vecOcurrencias.map((numAbsoluto, i) =>
    Math.pow(EN[i] - (numAbsoluto / sumatoria), 2)
  );
  const ecmEN =
    //vecOcurrenciasEN.reduce((a, b) => a + b) / vecOcurrenciasEN.length;
    (vecOcurrenciasEN.reduce((a, b) => (a + b)))/ vecOcurrenciasEN.length;

  let vecOcurrenciasDE = vecOcurrencias.map((numAbsoluto, i) =>
    Math.pow(DE[i] - (numAbsoluto / sumatoria), 2)
  );
  const ecmDE =
    //vecOcurrenciasDE.reduce((a, b) => a + b) / vecOcurrenciasDE.length;
    (vecOcurrenciasDE.reduce((a, b) => (a + b)))/ vecOcurrenciasDE.length;

  console.log(ecmES);
  console.log(ecmEN);
  console.log(ecmDE);

  const cod =
    ecmES < ecmEN && ecmES < ecmDE ? "ES" : ecmEN < ecmDE ? "EN" : "DE";

  return cod;
};

module.exports = {
  reconocerIdioma,
  otra,
};
