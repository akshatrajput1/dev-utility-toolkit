// Named imports
import { add, square } from "./mathUtils.js";

// Default import
import formatString from "./stringUtils.js";

// Mixed imports
import sumArray, { numbers, doubleArray } from "./arrayUtils.js";

const output = document.getElementById("output");

window.handleString = function () {
  const input = document.getElementById("inputText").value;
  output.innerText = formatString(input);
};

window.handleMath = function () {
  output.innerText = `Sum: ${add(2, 3)}, Square: ${square(4)}`;
};

window.handleArray = function () {
  const doubled = doubleArray(numbers);
  const sum = sumArray(numbers);

  output.innerText = `Doubled: ${doubled} | Sum: ${sum}`;
};
