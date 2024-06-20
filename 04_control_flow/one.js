// if 

// const isUserLoggedIn = true

// const temperature =41

// if(temperature<50){
//     console.log("less than 50");
// }
// console.log("greater than 50 ");


// if(2==="2"){
//     console.log("executed");
// }else{
//     console.log("not executed");
// }

// 2<=2
// <,>,<=,>=,==,!=, ===


// const score =200

// if(score >100){
//     const power ="fly"
//     console.log(`User power: ${power}`);

// }
// console.log(`User power: ${power}`);


//++++++++++++++++++++++++++++ SHORT HAND NOTATION +++++++++++++++++++++

const balance =1000

// if(balance>500) console.log("test");

// +++++++++++++++++++++++++++ NESTED ++++++++++++++++++++++++++++++

// if(balance <500){
//     console.log("less than");

// }else if (balance >750){
//     console.log("less than 750");
// }else {
//     console.log("less than 900");
// 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2!==3) { // AND (&&)
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // OR (||) condition
    console.log("User logged in");
}