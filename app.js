'use strict'


function createGreeting(){
 let userName = getUserName();
 let greeting = hourOfDay();
 document.write(greeting + ',' + userName + "!");
}

function getUserName(){
    let userName = prompt("What is your name?"); // AmAndA >> amanda 
    return userName;
}

function hourOfDay(){
    let currentHour = prompt("What is the current hour of the day (1-24)");
    let greeting = "";
    if(currentHour >= 17 && currentHour <= 24){
        greeting = "Good Evening"; 
    } else if(currentHour >= 12 && currentHour <= 16){
        greeting = "Good Afternoon";
    } else if(currentHour > 0 ) {
        greeting = "Good Morning";
    }else {
        greeting = "Welcome";
    }

    return greeting;
}

function sayHello(){
    let answer = prompt("how many cats do i have?");
    if(answer == 2){
        alert("you are right!")
    } else{
        alert("You are wrong, i have 2");
    }
    console.log("Hello");
}

function openText(){
    // randomly get a number (look online on how to get a random number????)
    let number = 1;
    if(number === 1){
        document.write("hello, this is some pretty cool text");
    } else if(number === 3) {
        // some other text
    }
}

alert("Hello, World");
sayHello();
// let ateDinner =false;
// // truthy falsy statement
// let newNumber = 4;
// let stringNumber = "4";

// // if(newNumber == stringNumber)
// // ! is a "bang" and it means NOT
// if(ateDinner !== true){
//     alert("don't skip dinner! EATTTT!");
// }


// && = AND
// || = OR
