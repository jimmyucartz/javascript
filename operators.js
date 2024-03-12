console.log(`OPERATORS \n \n`);

// arithemtic
console.log("1 + 2", 1 + 2);
console.log("8-7", 8 - 7);
console.log("1 / 2", 1 / 2);
console.log("1 * 2", 1 * 2);
console.log("20 % 3", 20 % 3);
console.log("3 ** 3", 3 ** 3);

// assignment
let a = 4;
console.log(a);

// Comparison Operators:
console.log("3 > 4", 3 > 4);
console.log("3 < 4", 3 < 4);
console.log("`4` == 4", "4" == 4);
console.log("`3` != 4", "3" != 4);
console.log("`4` === 4", "4" === 4);
console.log("`4` !== 4", "4" !== 4);
console.log("3 >= 4", 3 >= 4);
console.log("3 <= 4", 3 <= 4);

// Logical Operators:
if (true && true) {
  console.log("logical AND success");
}

let new_log = true;
let old_log = false;
let old_log_alt = false;

if (new_log && old_log) {
  console.log("logical AND success");
}

if (new_log || old_log) {
  console.log("logical OR success");
}

if (old_log_alt || old_log) {
  console.log("logical OR success");
}

if (!old_log) {
  console.log("logical NOT success");
}

// Bitwise Operators:
console.log("5 & 1", 5 & 1);
console.log("5 | 1", 5 | 1);
console.log("~ 5", ~5);
console.log("5 << 1", 5 << 1);
console.log("5 >> 1", 5 >> 1);

// Uniary Operators
let x = 5;
let y = -2;
console.log(+x);
console.log(+y);
console.log(+"");
console.log(+false);
console.log(+true);
console.log(+"hello");

// Ternary Operator (Conditional Operator):
let val1 = true;
let val2 = true;
// let val3 = true;

val1 ? console.log("Ternary success") : console.log("Ternary failure");

// String Operators
let string1 = "Hello ";
let string2 = "Javascript";
console.log(string1 + string2);

// Type Operators:

arr1 = [1, 2, "hello"];
let person = { name: "jimmy", age: 26 };

console.log(typeof person);
console.log(arr1 instanceof Array);
