//  VAR
console.log("==+   VAR   ===");

// global scope
var number = 100;

function printsq(number) {
  var square = number * number;
  console.log(square);
}

printsq(number);

console.log("number =>", number);

// local scope

const localprintsq = (number) => {
  var number1 = 100;
  var square = number1 * number1;
  console.log(square);
};

localprintsq(number);

// console.log("number =>", number1); => Error

// redeclare and reassign variable
var new_number = 20;
console.log(new_number);
var new_number = 31;
console.log(new_number);
new_number = 99;
console.log(new_number);

// hoisting
console.log(check_number);
var check_number = 11;
console.log(check_number);

// LET

console.log("==LET ===");

let let_number = 55;

const let_print = (number) => {
  let square = number * number; // local scope

  if (number < 60) {
    let smallnumber = 50; // block scope
    var anothersmallnumber = 30;
    console.log(square);
  }
  //   console.log(smallnumber); // error
  console.log(anothersmallnumber);
};

let_print(let_number);

// redeclare and reassign variable
let let_new_number = 20;
console.log(let_new_number);
// let let_new_number = 31; // cant redeclare
console.log(let_new_number);
let_new_number = 99;
console.log(let_new_number);

// hoisting

// console.log(let_check_number);
// let let_check_number = 10;
// ReferenceError: Cannot access 'number' before initialization

console.info("==  CONST  ===");

// ?scope
const const_number = 55;

const const_print = (number) => {
  const square = number * number; // local scope

  if (number < 60) {
    const smallnumber = 50; // block scope
    var anothersmallnumber = 30;
    console.log(square);
  }
  //   console.log(smallnumber); // error
  console.log(anothersmallnumber);
};

const_print(const_number);

// redeclare and reassign variable  => Cant reassign/redeclare

// hoisting

// console.log(const_check_number);
// const const_check_number = 10;
// ReferenceError: Cannot access 'number' before initialization
