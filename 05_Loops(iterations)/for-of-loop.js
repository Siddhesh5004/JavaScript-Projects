// for of (array specific loops)

const arr=[1,2,3,44,5,6]

for (const num of arr) {
   // console.log(num);
    
}

const greetings ="hello world"

for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
    
}

//// MAPS

const map =new Map()
map.set('IN',"india")
map.set('US' ,"australia")
map.set('JAP', "japnese")
map.set('IN' ,"india")

//console.log(map);


for (const [key,value] of map) {
    //console.log(key,':-',value);
}

const myObject ={
    game1 :'NFS',
    game2 :'oddssy',
    game3 : 'Valo',
    game5: 'kamla'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
        console.log(myObject [key]);
    }

//console.log(myObject);
