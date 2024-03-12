console.log(`\n`);
console.log(`\n`);
console.log("DATA TYPES");

//  Primitive
//
let abc = "abcdef";
console.log(abc, "=>", typeof abc);

let number1 = 100;
console.log(number1, "=>", typeof number1);

console.log("hello", "=>", typeof hello);

let valueA = null;
console.log(valueA, "=>", null);

let isPresent = true;
console.log(isPresent, "=>", typeof isPresent);

let isSymbol = Symbol("Hello");
console.log(isSymbol, "=>", typeof isSymbol);

// Non Primitive

const person = {
  name: "Alice",
  age: 25,
};
console.log(person, "=>", typeof person);

const colors = ["red", "green", "blue"];
console.log(colors, "=>", "Array =>", colors instanceof Array);

let func1 = function greet(name) {
  return `Hello, ${name}!`;
};

console.log(func1, "=>", typeof func1);

let today = new Date();

console.log(today, "=>", " Date ??", today instanceof Date);
