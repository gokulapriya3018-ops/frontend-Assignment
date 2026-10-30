const ages = [16, 21, 34];
console.log(ages.some(a => a < 18));
console.log(ages.every(a => a >= 18));
console.log(ages.every(a => a > 10));

console.log([].some(a => a > 0));
console.log([].every(a => a > 0));