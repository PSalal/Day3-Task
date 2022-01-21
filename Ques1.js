// Swapping using a third variable
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(`The value of a is: ${a} & The value of b is: ${b}`);


// swapping without using a third variable
let c = 5;
let d = 10;
[c,d] = [d,c]  // array destructuring
console.log(`The value of a is: ${c} & The value of b is: ${d}`);