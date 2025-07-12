// scope 

// {}   -> yeh he scope hain.

//var c = 300  // var ko avoid krenge use krna kyuki easily change in any scope
let a = 300                        // yeh global scope hain
if (true) {                       // yeh block scope hainn 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);    // yaha a = 10 he rahega kyuki block scope ke aanadr hain
    
}



 //console.log(a);                   // yaha a = 300 rahega kyuki global scope hain
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);         // == child parent ke variable ko use krsakta hain
    }
    // console.log(website);        == errro out of scope nahi hoga declare 

     two()

}
// console.log(username)  ->error
one()
//console.log(username)    = error




if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);    ---> hitesh ypoutube correct
    }
    // console.log(website);        ---  out of scope error
}

// console.log(username);   ---- out of scope error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))          // print hoga 

function addone(num){                         // one way to declare function
    return num + 1
}



addTwo(5)                // nahi hog error coz functuon ek variable m store and vaiable akha declare hua hain ??
const addTwo = function(num){                    // another   way to declare function
    return num + 2
}