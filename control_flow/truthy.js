// assume krlete hain ki value true he hogi ya false he hogi

// falsy value

// false, 0, -0, BigINT 0n, "", null, undefined, NaN


// other than these are true value,

const user = []      // js ne asssume krlia yeh true hain

if(user){
    console.log(`welocome ${user}`)   // abhi bhi print hoga empty array truw hota hain
} else {
    console.log(`sorry`)
}



// truthy value    joh suprise kregi 

// "0", 'false', [], {}, " ", function(){}

// to check empty object

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){                      // object array m convert hogaya     same for to check array is empty or not
    console.log(`empty`)
}


// false == 0                  all are true
// false == " "
// 0 == " "


// nullish coalesing operator 

let val1

val1 = 5 ?? 10   // --- 5                   // first value print krta hain 
// val1 = null ?? 10 // -- 10                           // fro null and undefined yeh second value print krega to avoid error and mistake
// val1 = undefined ?? 10  // --- 10

console.log(val1)



// terniary operator


// condition ? true : false  


const price = 100

price ==80 ?  console.log(`less`) : console.log(`more`)