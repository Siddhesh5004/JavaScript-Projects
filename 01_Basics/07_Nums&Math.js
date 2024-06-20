const score = 400
console.log(score);

const balance = new Number(100.55)
console.log(balance);
//converting number to string and string properties
console.log(balance.toString().length);
console.log(balance.toFixed(2));
 

const otherNumber =231.8588
console.log(otherNumber.toPrecision(3));

const hundreds =100000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); ///roundoff the number
console.log(Math.min(4,2,4,52,1)); //minimum number from array

console.log(Math.random()); ///random value between 1 and 0
console.log(Math.random()*10 + 1 );
const min=10
const max=20

console.log(Math.random() * (max - min +1) );




