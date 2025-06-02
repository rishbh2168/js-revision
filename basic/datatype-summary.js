//  Primitive -> call by value it take value as copy 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3

const isLoggedIn = false //boolean
const outsideTemp = null // null,   null type of is object
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')

console.log(id === anotherId); // false as output

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) -> allocate refrence directly

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {             // object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // to find data type

// https://262.ecma-international.org/5.1/#sec-11.4.3