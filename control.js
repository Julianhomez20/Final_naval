import {
  generarMatriz2Html,
  generarMatrizJug1Def,
  randomBarcos,
  matrizJug1,
  matrizAtaque,
  matrizJug2,
} from "./barcos.js";

// Función del boton jugar en el menú
export function botonJuego() {
  const botonJugar = document.getElementById("botonJugar");
  const menu = document.getElementById("menu");
  const juego = document.getElementById("reordenarBarcos");

  botonJugar.addEventListener("click", function () {
    menu.style.display = "none";
    juego.style.display = "block";
  });
}

export function IniciarJuego() {
  // Boton de jugar de la pantalla de reordenar
  const botonPlay = document.getElementById("botonJugar2");
  // Pantalla del menu
  const menu = document.getElementById("menu");
  // Pantalla del reordenar barcos
  const reordenar = document.getElementById("reordenarBarcos");
  // Pantalla del juego principal
  const juegoPrincipal = document.getElementById("juegoPrincipal");

  botonPlay.addEventListener("click", function () {
    menu.style.display = "none";
    reordenar.style.display = "none";
    juegoPrincipal.style.display = "flex";
    console.log(matrizJug1);
    generarMatrizJug1Def(matrizJug1);
    generarMatriz2Html(matrizAtaque);
  });
}
