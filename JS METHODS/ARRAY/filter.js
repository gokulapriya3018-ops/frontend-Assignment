// filter() is an array method in JavaScript.
// It returns a new array containing elements that satisfy a condition.
// It does not modify the original array.
// It returns only the elements for which the condition is true

let name = [1, 2, 3, 4, 5];
let num = name.filter((name, index) => name % 2 === 0);
console.log(num);
console.log(name);