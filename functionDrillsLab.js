/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/


////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

//CODE HERE

function helloWorld(){
  //print Hello, World!
  console.log('Hello, World!')
}
//call the function
helloWorld()

////////////////// PROBLEM 2 ////////////////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE

const jsNinja = () => {
  //when function ends, it will return the string below
  return 'I am a JavaScript Ninja!'
}

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE

//Expression form of function
const printName = function(name){
  console.log(name)
}
printName('Geralt')

////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE

//arrow function
const greeting = name =>{
  console.log(`Hello, ${name}`) //say Hello, name
}
greeting('Austin')

////////////////// PROBLEM 5 ////////////////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters,
    which will be numbers.
    The function should return the bigger number.
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE

const compareNums = (num1, num2) =>{
  num1 > num2 ? console.log(num1) : console.log(num2)
} //the num1 is checked for the largest #, if it is it prints, if its not, num2 is printed
  //if they are equal, it still evalutes to false, so num 2 is printed
  compareNums(69, 74)

////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

//CODE HERE

const add = (num1, num2) =>{
  num1 = +num1 //convert potential strings into numbers
  num2 = +num2
  return num1 + num2 //Take this value outside the function
}

let sum = add(8, 9) //variable created to call add function

////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
// console.log('declaration')
console.log('expression') //THIS IS INCORRECT, OR RATHER IT DOES NOT INVOKE
                          //THE FUNCTION FYI



////////////////// PROBLEM 8 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

console.log('arrow') //DOES NOT INVOKE THE FUNCTION
// console.log('declaration')
// console.log('expression')

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/
const exclaimThree = str => `${str.toUpperCase()}!!!`

////////////////// PROBLEM 9 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
console.log('declaration') //DOES NOT INVOKE FUNCTION
// console.log('expression')


////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE

const nameCheck = name =>{ //nameCheck has only 1 argument, name.
  if(name === 'Steven'){ //check name if it is Steven
    return `What is up ${name}?` //Reply to Steven
  } else if(name === 'Bryan'){ //Check if name is Bryan
    return `Hey ${name}` //Reply to Bryan
  }else{
    return `Cool name, ${name}`//If neither S or B, commpliment users name
  }
}
let nameGreeting = nameCheck('Panjakisha') //assigning nameCheck to nameGreeting

////////////////// PROBLEM 11 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

//CODE HERE

const faveColorFinder = color =>{ //color is the argument
  if(color === 'red'){ //if red print this
    return `red is a great color`
  } else if(color === 'green'){ //if green print this
    return `green is a solid favorite color`
  } else if(color === 'black'){ //if black print this
    return `so trendy`
  } else{ //print this if nothing else is true
    return `you need to evaluate your favorite color choice`
  }
}

let colorRating = faveColorFinder('blue') //variable that invokes the faveColorFinder function


////////////////// PROBLEM 12 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE

const printAllNames = array =>{ //single parameter is a list
  for(i = 0; i < array.length; i++){ //counting the length of the list
    console.log(array[i]) //printing each element in the list
  }
}
printAllNames(namesArr) //calling the printAllNames function

////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/

//CODE HERE

const thatsOdd = num =>{ //num is single parameter
  if(num % 2 === 0){ //if the number is even print this
    return `That's not odd!'`
  } else{ //otherwise print this
    return `That is odd indeed!`
  }
}

// const thatsOdd = num =>{
//   return (num % 2 === 0) ? `That's not odd!` : `That is odd indeed!`}
// /// Ternary statement for fun

let oddChecker = thatsOdd(9) //variable that invokes thatsOdd function


////////////////// PROBLEM 14 ////////////////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title.
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'.
    For example, if we passed in 'Sharknado',
    we would expect the function to return 'Sharknado is the best movie ever!'
*/

//CODE HERE

const bestMovie = title =>{
  return title + ` is the best movie ever!` //Tells you that movie title is the best
}

////////////////// PROBLEM 15 ////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/*
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers.
  Inside of the bigOrSmall function, create a new array called 'answers'.
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100.
  If it is, push 'big' as a string to the answers array.
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array.
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/

//CODE HERE

const bigOrSmall = arr =>{ //pass an array to the bigOrSmall function
  let answers = [] //define new array to store strings
  for(i = 0; i < arr.length; i++){ //loop the length of array
    if(arr[i] > 100){ //if over 100 type big
      answers.push('big')
    }else{ //if not type small
      answers.push('small')
    }
  }return answers //return the array
}

let arrayEvaluator = bigOrSmall(bigOrSmallArray)

////////////////// PROBLEM 16 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE

const theEliminator = (contestants, loser) =>{//who is competing and who finishes last
  for(i = 0; i < contestants.length; i++){ //loop for the length of competitor list
    if(contestants[i] === loser){ //when you find the loser
      contestants.splice(i, 1) //remove him from the list
    }
  } return contestants //return the revised list
}

let contestantsFinal = theEliminator(contestants, loser) //assign new list

////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE

const loudNoises = shout =>{ //shout parameter for loudNoises function
  console.log(shout.toUpperCase()) //convert string into UPPER CASE
}

loudNoises(sampleString) //invoke function

////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't,
  return 'must provide a valid email address'
*/

function emailCheck(email){  //emailCheck function is defined
  email = String(email.trim()) //convert into string data and remove whitespace
  if(email.includes('@')){ //search string for @ to verify email
    return 'email verified'
  } else {  // reject email string, it's missing @
    return 'must provide a valid email address'
  }
}


////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate,
  that buys as many chocolate frogs as possible with a certain amount of
  gold. Each chocolate frog costs 3 gold. Your function should take in a
  single parameter, which is the amount of gold you are willing to spend.
  Your function should return a total amount of chocolate frogs you were
  able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function
  invoked, passing in the amount of gold you are willing to spend.
*/

//CODE HERE

const frogCacao = gold =>{ //chocolate frog function defined
  frog = 3 //cost of frog
  return ((gold / frog))
}

let totalFrogs = frogCacao(28) //how much money you have to spend on chocolate frogs


////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were
  to pass in 4 gold, the function would return to you 1.3333... However,
  you can't really go to a store and by 1.333 products. You would just be
  able to purchase 1 product. Re-write the function you used in the previous
  problem (give it the same name, just add a 2 to the end of it) that fixes
  this bug. Invoke the function and store the returned value to a variable
  called `totalFrogs2`.
*/

//CODE HERE

const frogCacao2 = gold =>{ //better function for chocolate frog
  frog = 3 //cost of chocolate frog
  if(gold % 3 === 0){ //if you have no remaining money after purchase
    return gold / frog
  } else if(gold % 3 === 1){ //if you have 1 remaining gold after purchase
    return (gold -1) / frog
  } else{
    return (gold -2) / frog  //if you have 2 remaining gold after purchase
  }
}

let totalFrogs2 = frogCacao2(28)

////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument.
  In the body of the function, write logic to determine if the array is
  in ascending order. The function should return true, if it is sorted in
  ascending order, false if it is not. Create a variable,
  `arrayIsAscending` and set it equal to your function invoked. Use the
  sample array to test this function.
*/

//CODE HERE

function goingUp(arr){ //function to determine if array is ascending
  for(i = 0; i < arr.length; i++){ //standard for loop through array
    if(arr[i] > arr[i + 1]){ //if previous index is higher than next index
      return false           //than array is not in ascending order, return false
    }
  } return true //returns true if array is ascending order
}


let arrayIsAscending = goingUp(sampleArray)

////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ['duck']

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ['duck', 'rubberDuck']

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ['duck', 'rubberDuck', 'sailorDuck']

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ['duck', 'realDuck']
