const promiseone = new Promise(function(reolve, reject){
    //do an asysnc task
    //DB calls, network calls, crypography and all
    setTimeout(function(){
        console.log("operation complete");
    }, 1000)
})

