# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("rishi")

const buttons = document.querySelectorAll(".button")

// console.log(buttons)  // to check button store hua ya nahi

const body = document.querySelector("body")
//console.log(body)

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)   // from here we get event target
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })
});

//  event eo hum function m le sakte hain and kuch activity perform krsakte hain

// we need event listener joh event ko sunege

// .addEventListener("event name", function(e){
  //event ka function likh sakte hain  kyuki event bhi ek callback function hain
//})

```