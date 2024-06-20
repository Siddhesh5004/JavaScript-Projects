//primitive datatypes (callbyvalue)

// 7 types :String ,Number,Boolean,Null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp =null
let usermail;

const id=Symbol ('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber= 423434247890789789234
console.log(bigNumber);

//reference datatypes (non-primitive) 

//arrays,objects,functions

//array
const heros =["shaktiman","nagraj","dojacat"];
//object
let myObj={
    name:"sid",
    age:22,
}
//function
const myFunction = function(){
console.log("hello world");
}    

console.log(typeof heros);
