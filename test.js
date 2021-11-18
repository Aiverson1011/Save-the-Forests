// declare a number type variable
// jeramie
let value = 9;

// declare a string type variable
// jim
let codeFellows = "FUN!";

// write an if statement
// harvey
let process = false;
if (process === false) {
    alert("Some sort of message");
} else {
    console.log("the answer is true");
}

// write a function named "celebrate" that takes 1 parameter of "name" and returns the string "Congratulations {name}!"
// danny
function celebrate(name) {

    let celebration = "Congratulations " + name + "!";
    return celebration
}

// call the function with a name
let answer = celebrate("Bob");

console.log(answer);

// write a for loop that iterates 50 times. 
for(let meows = 1; meows <= 50; meows++) {
    console.log("Meow!");
}
