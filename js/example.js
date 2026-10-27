// scope
let x = 15;
function add() {
    let a;
    const c = a + 5;
    console.log(c); // NaN
}
add();

// increment
let num = 1;
let b1 = ++num;
let c1 = num++;
console.log(num + b1 + c1); // 7

// subtraction
const str1 = "5";
const num1 = 5;
const sub = str1 - num1;
console.log(sub); // 0

// check array
console.log(typeof []); // object
console.log(Array.isArray([])); // true

// destructuring
let user = { name: "varshini", age: 20 };
const { name, age } = user;
console.log(name, age);

// string concat
const s1 = "5";
const s2 = "10";
console.log((s2 + s1) + (s1 + s2)); // 105510

// number + string
console.log((Number(s2) + s1) + (s1 + s2)); // 105510

// multiplication
console.log((Number(s2) * s1) + (s1 * s2)); // 100

// division
console.log((Number(s2) + s1) / (s1 + s2));

// comparison
console.log(s1 === s2); // false
console.log("1" === String(1)); // true

// string - number
const a = "5";
const b = 10;
const c = a - b;
console.log(c); // -5