// Dates 
//Date is object

let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate =new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());


//Timestamps

let myTimeStamp =Date.now()
//console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

//
let newDate =new Date()
console.log(newDate.getMonth() + 1);






