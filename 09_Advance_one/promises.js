const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task 
    //Db calls , cryptographt , network
    setTimeout(function () {
        console.log('Async task completed');
        resolve()
    }, 1000)
})


promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "litegaming790@gmail.com" })

    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "siddhesh", mobno: "724929429492" })

        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then(function (user) {
    console.log(user);
    return user.username
})
.then(function (username) {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
}).finally(function(){
    console.log("promise resolved or reject");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"js", pass:"123"})
        }else{
            reject("ERROR:JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


fetch('https:api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})





