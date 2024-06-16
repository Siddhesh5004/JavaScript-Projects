const user ={
    username:"Siddjesh",
    price:999,

    welcomeMessage : function() { //this keyword refers to current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="ram"
// user.welcomeMessage()

// function chai (){      
//     let username = "siddjesh"
//     console.log(this);
// }

const chai = () => {      
    let username = "siddjesh"
    console.log(this);
}
chai()

// +++++++++++++++++arrow function ++++++++++++++++++

//const addtwo = (num1,num2) => num1 +num2
//const addtwo = (num1,num2) => (num1 +num2)
const addtwo = (num1,num2) => ({username:"siddhesh"})

console.log(addtwo(3,4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()