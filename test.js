/**
 * - Pair Programming -
* @author Muhammad Akbar <github.com/mhakbar>
* @author Ashley <github.com/tripleboba>
*/
const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');

  // try to get the value from the obj through the key
  value1 = object1[key1]; // obj1 a: 1
  value2 = object2[key2]; // obj2 c: 5

  // assign those 2 values to each obj = swap!
  // assign value1 to the value of the key2obj2
  object2[key2] = value1;
  object1[key1] = value2;
   
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1, b: 2, c: 3 }, 'c',{ a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });