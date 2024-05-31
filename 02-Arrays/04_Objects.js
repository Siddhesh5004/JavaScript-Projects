// singleton /Constructor

// const tinderUser =new Object()
const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "sid"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sid@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sid",
            lastname: "bhelke"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

/// const obj3 = {obj1,obj2}
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const users = [
    {
        id: 1,
        email: "ami@gmail.com"
    },

    {
        id: 2,
        email: "sid.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty ('isLoggedIn'));


const course ={
    coursename: "jshindi",
    courseprice: "999",
    courseInstructor:"hitesh chaudary"
}

console.log(course.courseInstructor);


[
    {},
    {},
    {}
]

// API data of from random user api 
[
{"results":[{"gender":"female","name":{"title":"Ms","first":"Vanessa","last":"Alfsen"},"location":{"street":{"number":8154,"name":"Johan Castbergs vei"},"city":"Hellesylt","state":"Akershus","country":"Norway","postcode":"6063","coordinates":{"latitude":"46.5304","longitude":"102.0390"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"vanessa.alfsen@example.com","login":{"uuid":"f0b6d640-3b56-4cd4-b67c-c31b09b7a3bb","username":"smallrabbit277","password":"jorge","salt":"TtyXZq7y","md5":"8fe451a4fca68e36468f7c38bacc8f44","sha1":"4eaa25457899cabf6c9b2a7c6fd0672611e5c33a","sha256":"f60a2bb2ea6e0437bd29d6e7d0a468c0e8a7bf3d5e2fa83c670b300c3844ce3b"},"dob":{"date":"1949-09-18T14:07:53.107Z","age":74},"registered":{"date":"2016-06-27T05:37:07.064Z","age":7},"phone":"67462771","cell":"45796295","id":{"name":"FN","value":"18094907043"},"picture":{"large":"https://randomuser.me/api/portraits/women/0.jpg","medium":"https://randomuser.me/api/portraits/med/women/0.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/0.jpg"},"nat":"NO"}],"info":{"seed":"4ab0c22fc1531288","results":1,"page":1,"version":"1.4"}}
]



