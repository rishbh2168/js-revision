//  Primitive -> call by value, it take value as copy 

//  7 types : String, Number, Boolearn, null, undefined, Symbol-> unique, BigInt

const score = 100 //number
const scoreValue = 100.3

const isLoggedIn = false //boolean
const outsideTemp = null // null,   null type of is object
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')

console.log(id === anotherId); // false as output

// const bigNumber = 3456543576654356754n  -> bigINT

// JavaScript is a dynamically typed language.

// Reference type (Non primitive) -> allocate reference directly

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {             // object curly bracket 
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // to find data type

// https://262.ecma-international.org/5.1/#sec-11.4.3



//stack (primitive) -> isme copy create hooga usme change hoga 
// heap (non - primitive) -> isme refrence value milega usme change hoga means original chaneg hoga

let myName = "rishi"
let herName = myName

herName = "rishabh"

console.log(myName) //-> rishi
console.log(herName)  // -> rishabh

let user = {
    email : "abcdotcom",
}

let usertwo = user

usertwo.email = "xyzdot.com"

console.log(user) //-> xyzdotcom
console.log(usertwo)  // -> xyzdotcom