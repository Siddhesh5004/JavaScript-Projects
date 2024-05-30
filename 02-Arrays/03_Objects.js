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

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mySym]);