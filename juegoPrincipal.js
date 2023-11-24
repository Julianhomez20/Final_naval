import { coordOcupadas1, coordOcupadas2 } from "./barcos.js";

// Array de coordenadas acertadas por el jugador
let cordenadasAcertadasJugador = [];
// Array de coordenadas acertadas por la maquina
let coordenadasAcertadasMaquina = [];

export function recorrerCoord1 () {
    coordOcupadas1.forEach(function(coordenadas) {
        console.log("fila: " + coordenadas[0] + ", columna: " + coordenadas[1]);
      });
};

