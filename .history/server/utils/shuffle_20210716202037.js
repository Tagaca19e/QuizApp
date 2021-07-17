/**
 * Welcome to the bonus round.
 * We need our options to be shuffled before
 * we send it to our users. Create a function that
 * will take in an array and shuffle the order of that
 * array.
 */

/**
 * Shuffles an array
 * @param {Array} array original array
 * @returns {Array} shuffled array
 */
// function shuffleArray(array) {
//   const arr = array.slice(0);
//   var currentIndex = arr.length,
//     temporaryValue,
//     randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = arr[currentIndex];
//     arr[currentIndex] = arr[randomIndex];
//     arr[randomIndex] = temporaryValue;
//   }

//   return arr;
// }
function shuffleArray(array) {
  const arr = array.slice(0);
  for (let i = array.length - 1; i > 0; i--) {
    const randInt = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return arr;
}

module.exports = shuffleArray;
