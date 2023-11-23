import { generarMatrizHTML, randomBarcos, reordenarBarcos } from "./barcos.js";
import { IniciarJuego, botonJuego } from './control.js';
import { iniciarTablero1 } from "./tableros.js";

// Tablero Jugador
let matrizJug1 = iniciarTablero1();

// Inicializar el botón jugar en el menú
botonJuego();
reordenarBarcos();
IniciarJuego();


