
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);   // this is use for context   o/p  hitesh welcome to website
//         console.log(this);       // talk about current context    // o/p  hitesh welcome to website
//                                       {
//                                           complete object print hoga 
//                                             username: "hitesh",
//                                              price: 999,
//                                              welcomeMessage: function()
                                             
//                                              then sam wala print hoga then object print hoga sam wala ke lia
                                    
//                                   // }
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()    // sam welcome to website

// console.log(this);    // {}   --- empty print hoga becaoz we ar ein node env. in we ar ebrowser the window print hota kyuki window is global object


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   ---undefined no context   work only in objects
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);            --- undefined no context
// }

// const chai =  () => {       --- arrow fxn
//     let username = "hitesh"
//     console.log(this);                    ----{}  empty   and if this.username then undefined


// chai()

// const addTwo = (num1, num2) => {                   -- BASIC ARROW FXN
//     return num1 + num2
// }

// console.log(addTwo(2,3))      ---  5


// implicit return

// const addTwo = (num1, num2) =>  num1 + num2           --- 5

// const addTwo = (num1, num2) => ( num1 + num2 )           ---- 5    if they are in() paraenthesis toh return nahi likhna hoga

// if they are in curly bracket {}  toh return likhna hoga  

// const addTwo = (num1, num2) => ({username: "hitesh"})    ---- object ko return krne ke lia paraenthseis needed 


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()  
