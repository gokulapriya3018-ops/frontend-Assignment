// Reduce : arr.reduce(callback(accumulator,currentvalue))
// Reduce returns single value 

const alpha = ['a', 'b', 'c', 'd', 'e', 'f'];
const total = alpha.reduce((acc, n) => acc + n)
console.log(total);

const num = [1, 2, 3, 4, 5]
const total1 = num.reduce((acc, n) => acc + n, 10)
console.log(total1);