/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cardGenerator() {
  //Primero declaramos las variables con los arrays
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["♦", "♥", "♠", "♣"];

  //Después creamos los números aleatorios
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomSuit = Math.floor(Math.random() * suits.length);

  //Llamando a los elementos del HTML

  let centralNumber = document.querySelector(".number");
  let upperSuit = document.querySelector(".upper-symbol");
  let lowerSuit = document.querySelector(".lower-symbol");

  //Modificando los elementos
  centralNumber.innerHTML = "<p>" + numbers[randomNumber] + "</p>";
  upperSuit.innerHTML = "<p>" + suits[randomSuit] + "</p>";
  lowerSuit.innerHTML = "<p>" + suits[randomSuit] + "</p>";

  //Cambiando el color de los palos
  if (suits[randomSuit] == "♦" || suits[randomSuit] == "♥") {
    upperSuit.style.color = "red";
    lowerSuit.style.color = "red";
  } else {
    upperSuit.style.color = "black";
    lowerSuit.style.color = "black";
  }
}

window.onload = function() {
  cardGenerator();
  setInterval(cardGenerator, 10000);
};

//Creando un temporizador extra

//1. Llamar a los elementos HTML
let timer = document.querySelector(".timer");
let timeLeft = 10;

//quiero que cada segundo que pase, me reste uno al tiempo restante
setInterval(() => {
  timeLeft--;
  if (timeLeft == 0) {
    timeLeft = 10;
  }
  if (timeLeft != 10) {
    timer.innerHTML = "00:0" + timeLeft;
  } else {
    timer.innerHTML = "00:" + timeLeft;
  }
}, 1000);

//Añadiendo una funcion click
let card = document.querySelector(".card");
card.addEventListener("click", cardGenerator);

//Cambiando tamaño de la carta

let heightField = document.getElementById("height");
heightField.addEventListener("change", event => {
  let userHeight = event.target.value;
  card.style.height = userHeight;
});

let widthField = document.getElementById("width");
widthField.addEventListener("change", event => {
  let userWidth = event.target.value;
  card.style.width = userWidth;
});
