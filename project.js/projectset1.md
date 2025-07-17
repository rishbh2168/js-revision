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

## project 2 solution 

```javascript
const form = document.querySelector('form')
//this usecase will give you empty value when we click on submit button the textbox get empty
//Const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function(e){  // evenet to stop value to submit in server and url
  e.preventDefault() // to stop default fxn like submit and all

  const height = parseInt(document.querySelector("#height").value) // .value to get value of id and class and parseInt for convert string into integer
  const weight = parseInt(document.querySelector("#weight").value) // value visible when submit button call also
  const results = document.querySelector("#results")

  if(height === " " || height < 0 || isNaN(height)){
    results.innerHTML = `Please give me valid height ${height}`
  } else if(weight === " " || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give me valid weight ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // tofixed for decimal value and divide by thousand for convert it to meters

    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6){
      results.innerHTML += `<br><span>Under weight</span>`
    } else if(bmi < 24.9 && bmi >= 18.6){
      results.innerHTML += `<br><span>Normal range</span>`
    } else if(bmi > 24.9){
      results.innerHTML += `<br><span>Overweight</span>`
    }

  }


})









/* in form when we click on submit button and want to see result so we need to select complete form

document.queryselector('form')

when we click on submit button the page is submit by two ways get and post so to stop not post the value to url or server we need to put and event name "submit"

to get the value of any id and class we acn use ".value"
or to convert string to int we use parseInt

*/

```

## project 3 solution

```javascript

const clock = document.querySelector("#clock")
//console.log(clock)

const time = new Date();
//console.log(time.toLocaleTimeString())

//set interval = apply when we need to ru n our script after some interval

// syntax == setInterval(function(){}, 1000);  //1000 is for how many milisecond baad code run krna hain

setInterval(function(){

  clock.innerHTML = time.toLocaleTimeString();
}, 1000);

```