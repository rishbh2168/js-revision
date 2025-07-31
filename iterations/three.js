// array specific loops

// for of loops


// ["", "", ""]
// [{}, {}, {}]                     --> array m nultiple object and string 


// so how we can itrate them ?

const arr = [1,2,3,4,5]

// for (const element of object) {              // synatx  of for of loop    
//     //  element = variable name    and  object == kispe loop lag raha hain
             
// }

for (const num of arr) {
   // console.log(num)
}


const greetings = "hello rishi"
for (const greet of greetings) {
    // console.log(`each letter of greetings are ${greet}`)               // each letter print honge
}


const map = new Map()     // define map

map.set('in', 'india')
map.set('usa', 'america')

// console.log(map)             // Map(2) { 'in' => 'india', 'usa' => 'america' }


for (const [key,value] of map) {
    console.log(key, ":", value)                        // in : india
                                                        // usa : america
}

const myobj = {
    game : "abc",
    game2 : 'xvc'
}

for (const [key, value] of myobj) {
    console.log(key , ":", value)                // errro coz object is not iterable by for of loop.
}

