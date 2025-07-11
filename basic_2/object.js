//singleton -> jab hum constructor se create kreneg to yeh banega, apne jaise ek he object banega

// object literals -> isme multiple instance banege, singleton nahi banega

// constructor and literal are way to craete object

// constructor -> object.create

//literal -> const user = {}

//how to define symbol

const mysym = Symbol("key1")

const user = {
    name: 'rishi',
    age: 18,
    email: 'rishi@com',
    "sex": "male", // isko hume log direct print nahi krsakte hain console.log(user.sex)  -> error
                    //  isko we need to print like this console.log(user["sex"]) -> male 

    //mysym: "abc1"  // -> print hojaega but yeh symbole nahi by checj typeof yeh string hain     
    [mysym]: "abc1" // ab yeh symbol hoga check krna typeof se         
    }

    console.log(user.name)  // rishi
    console.log(user["name"])  // rishi

    console.log(typeof user[mysym])


    
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this : agar sam eobject se value refer krni ho toh 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//console.log(JsUser.greeting);  -. withput braject function execute nahi hoga.
