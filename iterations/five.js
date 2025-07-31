// for each loop


// sabse jyada yeh he loop use krenge 


//  const coding = ['js', 'cpp', 'ruby']
                                             // coding.  -- yaha se sare method aajate hain
// coding.forEach()                               // foreach callbackfun. managata hain means yeh function demand lrta hain no need to put name of function

//see like this 
// coding.forEach( function (/*array value kuch bhi dedo name*/) { } )            // no need of fxn name coz callback hain

// coding.forEach( function (item) { 
//    // console.log(item)          // o/p is js cpp ruby
// } )   

// coding.forEach( (item) => {               //// by arrow fxn
//         console.log(item)           // correct print hogs
// } )     


// coding.forEach( (item, index, arr) => {    // we can use many thing like item, index, arr many things
//     console.log(item, index, arr)
// } )

const code = [
    {
        name : "rishi",
        age : 18
    },
    {
        name : "rishabh",
        age : 28
    },
    {
        name : "rishabnhs",
        age : 38
    }
    
]

code.forEach( (item) => {
    console.log(item.name)                   // sare object ske name aajaenge  
} )

