let combination = ["🍇", "🍉", "🍓", "🍎"];

function getRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getRandomItem(array) {
  return array[getRandomNumber(array)]; // Corregido para pasar 'array' como argumento
}

function getSlot() {
  let slot = getRandomItem(combination);
  return slot;
}


