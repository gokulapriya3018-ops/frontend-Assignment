// First, the name array stores 5 names.
// map() takes the first name, "ammu".
// index gets its position, 0.
// return creates a sentence using the name and index.
// The same process repeats for all 5 names.
// All sentences are stored in the new array newName.
// console.log(newName) prints the new array.
// console.log(name) prints the original array.



let name = ["ammu", "abi", "vini", "bharath", "vijay"]
const newName = name.map((name, index) => {
    return `index of this name ${name} = ${index}`
});
console.log(newName);
console.log(name);
