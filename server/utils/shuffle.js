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
function shuffleArray(array) {
  const arr = array.slice(0)
  // Implementation goes here
  for(let i= 0; i<arr.length; i++){
    let first = Math.floor(Math.random()*arr.length);
    let second = Math.floor(Math.random()*arr.length);
    var b=arr[first];
    arr[first]= arr[second];
    arr[second]= b;
  }
  return arr
}

module.exports = shuffleArray