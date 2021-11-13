'use strict'
// test if the JS is connected
// alert("Hello, World");

let test = "my test variable";

let userName = prompt("What is your name?"); // AmAndA >> amanda

let currentHour = prompt("What is the current hour of the day (1-24)"); // 11
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

console.log(userName); 

// normalize the value
// if(userName.toLowerCase() === "amanda"){
//     alert("Hi amanda!")
// } else{
//     alert("I don't know your name");
// }

document.write(greeting + ',' + userName.toUpperCase() + "!");
