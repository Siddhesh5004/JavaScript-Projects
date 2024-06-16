
//global scope
let a = 20
if (true) { //block scope 
    let a = 10
    const b = 30
    console.log("INNER:" ,a);
}

// for(let i=0;i<Array.length;i++){
//     const element=array[i];
// }

//console.log(a);


//nested scope

function one(){
    const username ="siddhesh"

    function two (){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);

   two()
}
//one()


if (true){
    const username="siddhesh"
    if(username=="siddhesh"){
        const website=" youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++++++++++++++++++interesting ++++++++++++++++++++++++++++++++++++

function addone (num){
    return num +1 
}
addone(5)


const addTwo  = function (num){
    return num+2
}
console.log(addTwo(5));