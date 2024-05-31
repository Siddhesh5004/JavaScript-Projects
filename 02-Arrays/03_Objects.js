//singleton []
// Object.create

//object literals

const mySym =Symbol("key1")

const jsuser={
    name:"sid",
    age:18,
   [mySym] :"mykey1",
    location:"pune",
    email:"siddehsh@gmail.com",
    isLoggedIn:false,

}

// console.log(jsuser.email);
// console.log(jsuser[mySym]);
// console.log(typeof [mySym]);

jsuser.email = "sidd@gmail.com"
// Object.freeze(jsuser)
jsuser.location="banglore"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log('hello jsuser ,${this.age}');
}

jsuser.greetingTwo = function(){
    console.log('hello jsuser');
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());