// const wordSearch = (letters, word) => {
//   // Convert each row of letters into a string
//   const horizontalJoin = letters.map(ls => ls.join(''));

//   // Iterate over each string in horizontalJoin
//   for (let l of horizontalJoin) {
//     // Check if the current string includes the word
//     if (l.includes(word)) {
//       return true; // Return true if the word is found horizontally
//     }
//   }

//   // Create the transposed array to enable vertical search
//   const transposedLetters = letters[0].map((col, i) => letters.map(row => row[i]));
//   const verticalJoin = transposedLetters.map(ls => ls.join(''));

//   // Iterate over each string in verticalJoin
//   for (let l of verticalJoin) {
//     // Check if the current string includes the word
//     if (l.includes(word)) {
//       return true; // Return true if the word is found vertically
//     }
//   }

//   return false; // Return false if the word is not found
// };

// module.exports = wordSearch;




const wordSearch = (letters, word) => {
  // This array stores strings where each string represents a row from the letters array joined together.
  const horizontalJoin = letters.map(ls => ls.join(''));
  // loops and checkif there's a word if yes then return true
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // stores vertical searches
  const verticalJoin = [];
  // do the loopy loops again to seatch for words per column
  for (let i = 0; i < letters[0].length; i++) {
    let verticalString = '';
    for (let j = 0; j < letters.length; j++) {
      verticalString += letters[j][i];
    }
    verticalJoin.push(verticalString);
  }
  // looped and check if the letters collecteed formed words
  // if yes then true if no then false
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;
