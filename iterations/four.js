// object ko iterate kaise kre

// for in loop use krenge


const myobj = {
    game : "abc",
    game2 : 'xvc'
}

for (const key in myobj) {
    
       // console.log(key , ":", myobj[key])        // game : abc
                                                  // game2 : xvc                 

    }


    const arr = ["js", "ruby", "cpp"]

    for (const lang in arr) {
        console .log(`my lang in year wise is ${arr[lang]}`)            // my lang in year wise is js
                                                                         //  my lang in year wise is ruby
                                                                           //  my lang in year wise is cpp
    }

     const array = ["js", "ruby", "cpp"]

    for (const lang in arr) {
        console .log(`my lang in year wise is ${lang}`)            // my lang in year wise is 0           kyuki yeh arrr ki index lega
// my lang in year wise is 1
// my lang in year wise is 2
    }


    // map is not iterable by for in loop 