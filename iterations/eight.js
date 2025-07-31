//reduce 


// inthis we have accumaltor, current value, initial value  

// inital value = accumalator initilaly
// then accumaltor = accumaltor  + current value


// const mynum = [1,2,3]
// let newnum = mynum.reduce( (acc,curr) => {
//     return acc + curr
// },0 )                // initial value = 0

// console.log(newnum)


const shoppingcart = [
    {
        course : "js",
        price : 2999
    },
    {
        course : "py",
        price : 29999
    },
    {
        course : "cpp",
        price : 299
    }
]

let total = shoppingcart.reduce( (acc,item) => {
    return acc+item.price
},0 )

console.log(total)