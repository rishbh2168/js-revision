// map  


const mynum = [1,2,3,4,5]


// let newnum = mynum.map( (val) => {
//     return val + 1
// } )
// console.log(newnum)               // [2,3,4]


let newnum = mynum
.map( (val) => {return val+ 1})
.filter( (item) => {return item > 3} )

console.log(newnum)



