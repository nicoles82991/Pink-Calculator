/*  
Basic Calculator Project

Variables:
currentOperand: Stores the current number being input.
previousOperand: Stores the previous number for operations.
operation: Stores the selected operation.

Functions:
appendNumber(number): Adds a number to the current operand.
chooseOperation(op): Sets the operation and prepares for the next operand.
compute(): Performs the calculation based on the selected operation.
clearDisplay(): Clears the display and resets the operands and operation.
updateDisplay(): Updates the display with the current operand.

*/

/*
let currentOperand = "";
let previousOperand = "";
let operation = undefined;

const display = document.getElementById("display");
//pulls display from the html via the DOM

//Shows the numbers on display - pulls the numbers from the onclick function made in the html
function appendNumber(number) {
  if (number === "0" && currentOperand === "") return; //to prevent starting with 0
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}
//toString() is to ensure that they are treated as strings when they are concatenated. Basically so the numbers in the display will show next to each other instead of just adding together preemptively - if a user puts in a 3 and a 4, itll give 34 instead of 7

//Sets the operation and prepares for the next operand. - this function is responsible for setting up the operation that the user wants to perform ( such as addition, subtraction, multiplication, and division) - this all allows the calculator to chain operations together. example - if input is '5 + 3 * 2' it will compute the 5+3 first then use the result to compute the multiplication.
function chooseOperation(op) {
  if (currentOperand === "") return; //if this is empty it does nothing, this prevents setting an operation without a number to operate on. need to input a number before selecting your operator
  if (previousOperand !== "") {
    compute(); //This condition checks if previousoperand is not empty, aka a number is already stored in there- if its not empty then we call the compute function to perform the calculation.
  }
  operation = op; // This line sets the global operation variable to the operation passed to the function (op). - op is the operation chosen by the user (e.g., +, -, *, /).
  previousOperand = currentOperand; //moves the current number to the previous operand, preparing it to be used in the next calculation.
  currentOperand = ""; // This line clears currentOperand, setting it to an empty string. - It prepares currentOperand to receive the next number input by the user after selecting an operation.
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  // ^^ These two make it from a string to a integer decimal
  if (isNaN(prev) || isNaN(current)) return;
  //^^ if NaN, returns the operation early and does nothing - ensures it only works with valid numbers
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
    //The default case provides a way to handle unexpected or unsupported values for the operation variable. It is executed if none of the specified case labels match the value of operation. In this specific implementation, the default case contains the statement return;. This means that if operation does not match any of the cases (+, -, *, /), the function will immediately exit and return undefined.
  }
  currentOperand = computation; // updates the result from the switch statement above to show in the currentOperand
  operation = undefined; // operation is set to undefined, indicating that no operation is currently selected.
  previousOperand = ""; // previousOperand is cleared, resetting it for the next input sequence.
  updateDisplay();
}

//obvious - a funcation that just makes everything an empty string + undefined and updates the display to that
function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}
//obvious - updates the display to the current numbers chosen
function updateDisplay() {
  display.value = currentOperand; // display.value - sets the value in the display text input as the currentOperand - i got display via the dom with "const display = document.getElementById("display");" earlier. display.value refers to the value property of the input element. This property determines what text is shown inside the input box.
}
clearDisplay(); // Initialize the display - this makes it so the number clears after the compuated number is shown
*/

let currentOperand = "";
let previousOperand = "";
let operation = undefined;

const display = document.getElementById("display");

function appendNumber(number) {
  if (number === "0" && currentOperand === "") return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
  updateDisplay();
}

function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}
function updateDisplay() {
  display.value = currentOperand;
}

clearDisplay();
