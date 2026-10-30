const n = [1, 205, 5012, 101, 100, 59];
console.log([...n].sort());
console.log([...n].sort((a, b) => a - b));
console.log([...n].sort((a, b) => b - a));

const a = [1, 59, 101, 1000, 7];
console.log([...a].sort());

const names = ["zebra", "apple", "cat", "elephant"];
names.sort((a, b) => a.localcompare(b));
console.log(names)