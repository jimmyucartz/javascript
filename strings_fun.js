let string1 = "Hello ";
let string2 = "Javascript ";
let string3 = `Master `;

console.log(string1.charAt(1));
console.log(string1.concat(string3, string2));
console.log(string1.indexOf("o"));
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());
console.log(string1.substring(0, 5));
console.log(string1.split(""));
console.log(string1 + string2);
console.log(`${string1} this is ${string2} ${string3} here`);
console.log(string1.length);

console.log(`<==== FUNCTIONS ===> \n `);
// FUnctions
function greetwithName(name) {
  console.log("Hello, " + name + "!");
}

const greetwithNameAlt = function greet(name) {
  console.log("Hello, " + name + "!");
};

greetwithName("Visitor");
greetwithNameAlt("Visitors");

const arrowFun = (number) => {
  console.log(number ** 2);
};

arrowFun(10);

var cubeFn = (number) => {
  return number ** 3;
};

let prim_number = 5;
cubed_value = console.log(cubeFn(prim_number));
