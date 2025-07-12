
// Immediately Invoked Function Expressions (IIFE)

//  use too execute the fxn immediately  and
// global scope se pollution/problem nahi chaiye so we craete separate scope to run and immediately run.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      

//()()     --- 1st one is for wrap function and in second one hum log use kreneg () excute ke lia 
// ; to end iife or stop iife

( (name) => {         // arrow fxn     // unnammed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
