// // //syntax: arr.find(callback,thisArg)
// Array.findIndex
// Callback(element,index)



// let name = [1, 2, 3, 4, 5];
// let num = name.find((name,index)=>name==3);
// console.log(num);
// console.log(name);

//findIndex Example

// const arr = [10, 20, 30, 40, 50];
// const index = arr.findIndex((arr,index)=>arr==40);
// console.log(index);
// console.log(arr);

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
const index = arr.find((arr, index) => index == 7);
const index1 = arr.findIndex((arr, index) => index == 11);
console.log(arr);
console.log(index);
console.log(index1);


const users = [
    { id: 1, name: "ammu" },
    { id: 2, name: "abi" },
    { id: 3, name: "priya" },
    { id: 4, name: "san" },
    { id: 5, name: "naren" },
    { id: 6, name: "deepa" },
    { id: 7, name: "kavi" },
    { id: 8, name: "kavin" },
    { id: 9, name: "divya" },
    { id: 10, name: "divyesh" },
    { id: 11, name: "chandru" },
];

const itemAtIndex7 = users.find((item, index) => index === 7);
const itemAtIndex11 = users.findIndex((item, index) => index === 11);
console.log("Object at Index 7:", itemAtIndex7);
console.log("Object at Index 11:", itemAtIndex11);
