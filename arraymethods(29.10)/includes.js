const pets = ['cat', 'dog', 'cat', NaN];
console.log(pets.indexOf('cat'));
console.log(pets.indexOf('cat', 1));
console.log(pets.indexOf('fox'));
console.log(pets.includes('dog'));
console.log(pets.includes(NaN));
console.log(pets.indexOf(NaN));
