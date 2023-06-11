const transpose = function(matrix) {
  // Replace this code with your solution
  const mtrx = matrix[0].length;

  const trx = matrix.length;

  const results = [];

  for (let m = 0; m < mtrx; m++) {
    const newmtrx = [];
    for (let i = 0; i < trx; i++) {
      newmtrx.push(matrix[i][m]);
    }

    results.push(newmtrx);

  }

  return results;
 
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));