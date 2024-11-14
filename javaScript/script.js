console.log("Hello World From File")
x=10; // ==var x=10;
// let
let y=20; // equal var
let z;
z=15;
//const
const PI=22/7;
console.log(z+y);
console.log(PI);

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// Prompt the user to enter two numbers
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

// Prompt the user to choose an operation
let operation = prompt("Choose an operation (+, -, *, /): ");

// Perform the chosen operation
let result;

switch (operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    break;
  default:
    result = "Invalid operation";
    break;
}

// Display the result
console.log("Result: " + result);
