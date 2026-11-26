//matriz.js - una matriz es un vector de vectores (filas y columnas)
const dias = ["Lunes", "Martes"]; //el nombre de cada fila
const agenda = [
  //filas: días . columnas: horas
  ["Retrato", "Libre", "Perfil"], //flila 0: lunes
  ["Libre", "Familiar", "Libre"], //fila 1 martes
];
console.log(agenda[1][1]); //fila1, columna1
for (let f = 0; f < agenda.length; f++) {
  //recorrer las filas
  console.log(`${dias[f]}: ${agenda[f].join(" | ")}`); //misma posicion de f
}
