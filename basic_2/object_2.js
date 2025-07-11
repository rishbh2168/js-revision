// how we defien as constructor in this we talk about


// const tinderUser = new Object() -> yeh contructor (singleton)

// const tinderuser = {}  -> yeh literal(non singleton)
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {             // object ke under object   object nesting
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  -> object ke anadr object
// const obj3 = Object.assign({}, obj1, obj2, obj4)  ->  to mergr object {} -> work as target and rest work as source

const obj3 = {...obj1, ...obj2}    // spread operator to merge object  mainly use
// console.log(obj3);


const users = [    // array ke under object
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    -> key value aaegi and yeh typeof array hain
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));      -> key and value ko array banadega

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    -> to check yeh valu ehain ya nahi ?




// destructuring of objecr

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course     //-> destructure krlia bade naam ko ki multiple time use krsake easily

// console.log(courseInstructor);  -> yeh bhi pront krega without course.
console.log(instructor);
 
// {                                             yeh json treat hoga
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[                                          // json format m api ka format hain array ke under object
    {},
    {},
    {}
]
