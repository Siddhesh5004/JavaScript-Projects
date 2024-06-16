//traditional way 
//console.log("s");
//console.log("i");
//console.log("d");

//Function

function sayMyname (){
    console.log("s");
console.log("i");
console.log("d");
}

//sayMyname()

// function addtwonos (no1,no2){  //parameters

//     console.log (no1+no2);
// }
function addtwonos (no1,no2){  //parameters

    // let result = no1+no2
    // return result
   return no1+no2
}

const result =addtwonos(3,5) // function called

// console.log( "Result : ",result);

function loginuser (username){
    return `${username} just logged in `
}
// console.log((loginuser ('siddhesh'))); 

function calculateCartPrice (...num1 ){  //... rest/ spread oerator

    return num1
}
console.log(calculateCartPrice(200,400,300));

 const user={
    username:"hitesh", 
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



