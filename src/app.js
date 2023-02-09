/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#Combination").innerHTML = generatecombination();
  console.log("Hello Rigo from the console!");
};

let generatecombination = () => {
  let slot1 = ["🍇", "🍉", "🍓", "🍎"];
  let slot2 = ["🍇", "🍉", "🍓", "🍎"];
  let slot3 = ["🍇", "🍉", "🍓", "🍎"];
  let slot4 = ["🍇", "🍉", "🍓", "🍎"];

  let giroslot1 = Math.floor(Math.random() * slot1.length);
  let giroslot2 = Math.floor(Math.random() * slot2.length);
  let giroslot3 = Math.floor(Math.random() * slot3.length);
  let giroslot4 = Math.floor(Math.random() * slot4.length);

  return (
    slot1[giroslot1] +
    " " +
    slot2[giroslot2] +
    " " +
    slot3[giroslot3] +
    " " +
    slot4[giroslot4]
  );
};
