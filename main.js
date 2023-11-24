import { generarMatrizHTML, randomBarcos, reordenarBarcos } from "./barcos.js";
import { IniciarJuego, botonJuego, juego, settings } from './control.js';
import { recorrerCoord1 } from "./juegoPrincipal.js";
import { iniciarTablero1 } from "./tableros.js";

// Tablero Jugador
let matrizJug1 = iniciarTablero1();

// Inicializar el botón jugar en el menú
settings();
botonJuego();
reordenarBarcos();
IniciarJuego();
juego();


