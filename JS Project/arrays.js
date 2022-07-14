// let numbers = [1, 2, 4, 7];

// console.log(numbers)

// let fruits = ['Banana', 'Apple', 'Mango']

// console.log(fruits);

// let cars = new Array('Toyota', 'Ford', 'Camry');

// console.log(cars);

// console.log(cars[1]);

// cars[1] = 'Honda'

// console.log(cars);

// cars.push('Benz')
// console.log(cars);

// console.log(cars.length)

// let x;

// for(x in cars){
// console.log(cars[x]);
// }

// for(x of cars){
//     console.log(x);
// }  

let fruits = ['Banana', 'Apple', 'Mango']
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift();
console.log(fruits)

fruits.push('Cherry'); //Add elements to the end
console.log(fruits)

fruits.unshift('Pawpaw') //Add elements at the beginning
console.log(fruits)

delete fruits[1]
console.log(fruits)

fruits[1] = 'Orange';
console.log(fruits)

fruits.splice(0,2)
console.log(fruits)

fruits.splice(2,0, 'Lemon', 'Mango')
console.log(fruits)