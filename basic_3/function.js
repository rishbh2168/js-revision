// function addno(num1, num2){
    
//     console.log(num1 + num2)
// }

// //addno(2,3)    // 5

// const result = addno(2,3)
// console.log("a:", result)  //  5 and a : undefined

// function addno(num1, num2){
    
//     let result = num1  + num2
//     console.log("rishi")    //-> yeh print hoga
//     return result
//     //console.log("rishi")    -> in function after return kuch nahi print hota hain
// }

// const abc = addno(4,5)
// console.log(abc)

function addno(num1, num2){
    
    return num1  + num2
  
}

// const abc = addno(4,5)
// console.log(abc)

function loginuser(username = "sam"){
    if(username === undefined){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`  // undefined  coz upar return hogya
}
//loginuser("rishi")  // kuch print nahi hoga 
// console.log(loginuser("rishi"))  // ab print hoga

//console.log(loginuser())  // undefined just logged in  

// console.log(loginuser())  // sam just logged in sam ki value default aaegi

//console.log(loginuser("rishi"))  // risih logged in







// suppose we have situation in which we did not know how many argument we need to pass,
//ex:  in shopping cart user can add multiple product in his cart so how can we handel this situation

// we have REST operator for the same..

function calculatecartprice(num1){              
    return num1
}

//console.log(calculatecartprice(200,330,400))         //  only one valur print hogi 200


function calculatecartprice(...num1){                     // REST OPREATOR use kr syntax (...num1)
    return num1
}

//console.log(calculatecartprice(200,330,400))   // now array aaega [200,330,400]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))   // [500,2000]  -> yeh num 1 hain and val1 and val2 are = 100,200 amd voh retrun nahi hua haim



// how we pass object in function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)    ->  same otput pass krega
handleObject({            // -> direct object pass krdia
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));


const abc = {
    name: "rishi",
    age: "20"
}

function getobject(anyobject){
    console.log(`username is : ${anyobject.name}`)    // -> username is rishi
}

// getobject(abc)  
 