// let x = 1;
// console.log(`x is ${x}`);

// setTimeout(() => {
//   x++;
//   console.log(`inside the call x is ${x}`);
// }, 2000);

// console.log(`after call x is ${x}`);

// console.log('before the setTimeout');

// const delay = 0;

// setTimeout(() => {
//   console.log('inside the setTimeout');
// }, delay);

// console.log('after the setTimeout');


// what will the code output?

let i;

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}