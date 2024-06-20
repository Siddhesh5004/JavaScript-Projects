const userEmail = ""

if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have");
}

// falsy values
//false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false'," ", [], {}, function(){}

if (userEmail.length ===0) {
    console.log("array is empty");
}  

const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}


//Nullish Caolescing Operator (??) : null undefined

let val1 ;
val1 = 5 ?? 10
val1= null ?? 10

val1= null ??20 ??10

console.log(val1);