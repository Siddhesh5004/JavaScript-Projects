let myName = "Siddhesh"

//console.log(myName.trueLength);

let myHeros = ["thor","batman"]

let heroPower = {
    thor:"hammer",
    batman: "sling",

    getBatmanPower: function(){
        console.log(`Batman power is ${this.batman}`);
    }
}
Object.prototype.Siddhesh = function(){
    console.log(`siddhesh is present in obj`);
}

Array.prototype.heyhitesh= function(){
    console.log(`hitesh says hello`);
}
//heroPower.Siddhesh()
myHeros.heyhitesh()
//heroPower.Siddhesh()
myHeros.Siddhesh() //power givrn to higher hierarchy

// Inheritance

const user = {
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher  = {
    makevideo: true

}

const TeachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment: 'js assignment ',
    fulltime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__= user //old syntax

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaurcode   "

String.prototype.trueLength =function(){
    //console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);

}

anotherUsername.trueLength()
"Siddhesh".trueLength()
"icetea".trueLength()