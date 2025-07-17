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
## project 4 solution

``` javascript

let randomnumber = Math.round(Math.random() * 100 + 1)  // random number
// console.log(randomnumber)

const submit = document.querySelector("#subt")
const userinput = document.querySelector("#guessField")
const gussslot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const loworhigh = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultParas")  // for new game

const p = document.createElement("p") // create an paragraph

let prevguess = []
let numguess = 1

let playgame = true;  // booleam to check that game is start in game always craete an boolean like this to chcek false case

if(playgame){ // if it is true then we can proceed further 
  submit.addEventListener("click", function(e){   // add event to listen submit button
    e.preventDefault()
    const guess = userinput.value  // guessfiled ki value aaegi
    valiadteguess(guess)

  })
}

function valiadteguess(guess){
  // check that guess is valid or not false conditiona nd all check

  if(isNaN(guess)){
    alert(`please enter valid number`)
  } else if(guess < 1){
    alert(`please enter a number greater than or equal to 1`)
  }else if(guess > 100){
    alert(`please enter a number less than 100`)
  }else {
    prevguess.push(guess)
    if(numguess === 10){  // if number of guess is 10 teh game over
      displayguess(guess)
      displaymessage(`game over. number is ${randomnumber}`)
      endgame()
    } else {
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  // check that guess user input is = random number or not

  if(guess === randomnumber){
    displaymessage(`WONNNNN`)
    endgame()
  }else if (guess < randomnumber){
    displaymessage(`number is too high`)
  }else if (guess > randomnumber){ 
    displaymessage(`number is too low`)
  }

}

function displayguess(guess){
  // dispaly the guess, clean user input then update array and update the reamining guess

  userinput.value = ''   // too clean the user input, guess filed ko clean krna fo rnext guess
  gussslot.innerHTML += `${guess}`
  numguess++
  remaining.innerHTML = `${10 - numguess}`
}

function displaymessage(message){
  // dispaly message according to guess that user input is too high or too low or correct

  loworhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
  // to end the game
  userinput.value = ''
  userinput.setAttribute("disabled", "")   // to diable the guess field
  p.classList.add("button")      // to create new button
  p.innerHTML = `<h2 id="newgame"> start new game </h2>`  // newgame button create krdenge when click on it to start new game
  startover.appendChild(p)    //for restart game
  playgame = false
  newgame()
}

function newgame(){
  // to start new game
  const newgamebutton = document.querySelector("#newgame")
  newgamebutton.addEventListener("click", function(e){  // new button pe event lag rahe hain
    randomnumber = Math.round(Math.random() * 100 + 1)  // regenerate randomnumber
    prevguess = []  // array ko empty krdo
    numguess = 1  // guess ko restart from 1
    gussslot.innerHTML = ''  // isko bhi empty krdo prev guess
    remaining.innerHTML = `${10 - numguess}`   // isko bhi 10 se start krdo
    userinput.removeAttribute("disabled")  // disable ke attribute ko remove krdo
    startover.removeChild(p)
    playgame = true    // game retstart krdo
  })
}







```