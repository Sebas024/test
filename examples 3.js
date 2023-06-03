const sumToOne = function(n) {
  let sum = 0;
  if (n > 1) {
    sum = 1;
  } else {
    sum = n + sumToOne(n - 1);
  }
  return sum;
};

console.log(sumToOne(4));
