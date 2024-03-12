let person1 = {
  name: "Ajay",
  age: 21,
};

let person2 = {
  name: "Anoop",
  age: 25,
};

let person3 = {
  name: "Alex",
  age: 39,
};

if (person1.age > person2.age) {
  if (person1.age > person3.age) {
    console.log("Person 1 is the oldest");
  } else {
    console.log("Person 3 is the oldest");
  }
} else {
  if (person2.age > person3.age) {
    console.log("Person 2 is the oldest");
  } else {
    console.log("Person 3 is the oldest");
  }
}
console.log("ELSE IF \n");
if (person1.age > person2.age && person1.age > person3.age) {
  console.log("Person 1 is the oldest");
} else if (person2.age > person1.age && person2.age > person3.age) {
  console.log("Person 2 is the oldest");
} else if (person3.age > person1.age && person3.age > person2.age) {
  console.log("Person 3 is the oldest");
}

const PrintName = (color) => {
  switch (color) {
    case "red":
      console.log("RCB");
      break;
    case "yellow":
      console.log("CSK");
      break;

    case "purple":
      console.log("KKR");
      break;

    default:
      console.log("Not Found");
      break;
  }
};

PrintName("red");

// LOOPS

console.log("LOOPS \n");

let min_age = 18;
let max_age = 35;

for (let i = min_age; i <= max_age; i += 2) {
  console.log(i);
}

let incr = min_age;
while (incr < max_age) {
  console.log(incr);
  incr += 4;
}
let incre = 35;
console.log("\n");
do {
  console.log(incre);
  incre += 4;
} while (incre < max_age);

let arr1 = [1, 2, 3, 5, "hello"];
for (i in arr1) {
  console.log(i);
  console.log(arr1[i]);
}
//

console.log("\n");
for (i of arr1) {
  console.log(i);
  //   console.log(arr1[i]);
}

console.log("\n");

let initial = 0;
let max = 10;
while (initial <= max) {
  initial++;
  if (initial % 2 == 0) {
    continue;
  }
  console.log(initial);
}

console.log("\n");
a = "Hello";

try {
  console.log(a / b);
} catch (err) {
  // throw new Error(" Error occured");
} finally {
  console.log("Done");
}

console.log("\n");

let newPromise = (a, b) =>
  new Promise((resolve, reject) => {
    if (a % b == 0) {
      resolve("Promise resolved");
    } else reject("Promise Rejected");
  });

newPromise(10, 3)
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

const resolveFn = async () => {
  try {
    const res = await newPromise(10, 5);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

resolveFn();
