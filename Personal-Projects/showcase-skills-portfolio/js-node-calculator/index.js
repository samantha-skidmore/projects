const rs = require('readline-sync');

console.log("Hello...my name is node and I LOVE Math.  I can calculate any two numbers for you. \nYou provide me the numbers and the operation type and watch me 'magically' provide you the answer. \nHope you are ready because here we go... ");

num1 = rs.question("What is your first number?  ");
num2 = rs.question("What is your second number?  ");

let userInput = rs.question("Type in one of the following operators that you would like me to use: add, subtract, multiply, divide?  ");

let sum = 0;
let sub = 0;
let mult = 0;
let div = 0;
let total = 0;
// let num1 = 0;
// let num2 = 0;

function add(num1, num2) {
    sum = Number(num1) + Number(num2);
    return sum;
}

function subtract(num1, num2) {
    sub = Number(num1) - Number(num2);
    return sub;
}

function multiply(num1, num2) {
    mult = Number(num1) * Number(num2);
    return mult;
}

function divide(num1, num2) {
    div = Number(num1) / Number(num2);
    return div;
}

if (userInput === "add") {
    console.log(add(num1, num2));
} else if
  (userInput === "multiply") {
    console.log(multiply(num1, num2));
        } else if
        (userInput === "divide") {
        console.log(divide(num1, num2));
            } else if 
            (userInput === "subtract") {
            console.log(subtract(num1, num2));
            } else {
                return;
            }
        