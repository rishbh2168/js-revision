// if 
/*
if(condition === true){
    toh execute hoga 
}
verna nahi hoga
*/

// operator

// >,<,=,==,===,>=,<=,!= 

// if(2 != 3){         // condotion true hani to excute hoga
//     console.log(`hello`)
// }


// const userlogbygoogle = true
// const userlogbyemail = false

// if(userlogbyemail || userlogbygoogle){               // && == and both condition should true tabhi run hoga  
//                                                     // || == OR any one contidion should be true tabh bhi run hojaega
//     console.log(`success`)
// } else {
//     console.log(`fail`)
// }                                                     we can check more than 2 condition also


// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}