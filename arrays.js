let empty_arry = [];
let arry1 = [1, "3", "hello", true, null, { name: "test" }, empty_arry];
console.log(empty_arry);
console.log(arry1);

console.log(arry1[5]);

arry1[4] = "JS";
console.log(arry1);

console.log(arry1.length);

// array methods

arry1.push("1");
console.log(arry1);
arry1.pop();
arry1.pop();
console.log(arry1);
arry1.shift();
console.log(arry1);
arry1.unshift(100);
console.log(arry1);
arry1.splice(0, 3);
console.log(arry1);
var new_array = arry1.slice(2);
console.log(new_array);
let arry2 = ["1", 2, "4", "test"];
console.log(arry1.concat(arry2));
console.log(["J", "i", "m", "m", "y"].join(""));
console.log(arry1.indexOf("JS"));
arry1.push("JS");
console.log(arry1.lastIndexOf("JS"));
console.log(arry1.includes(100));
console.log(arry1.includes("JS"));
var new_array = arry1.map((i, _, arr) => {
  if (typeof i == "string") {
    return i;
  }
  return 0;
});
console.log(new_array);

console.log("mapped_new_array", new_array);
console.log(
  "flitered array",
  arry1.filter((a) => typeof a !== "string")
);
console.log(arry1);
let num_array = [1, 4, 5, 10, 15];
let summed = num_array.reduce((a, i) => a + i);
console.log(summed);
let diff = num_array.reduce((a, i) => i - a);
console.log(diff);
//
arry1.push(100, 200, -13);
let reversed_array = arry1.slice().reverse();
console.log(arry1, reversed_array);

//

for (i in arry1) {
  console.log(arry1[i]);
}

//
// EVENTS
