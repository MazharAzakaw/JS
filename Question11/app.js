//11. Write a JavaScript function that reverse a number
//Example: x = 32242
//	Expected Output: = 34223

let reverseNumber = (number) => {
  return number.toString().split("").reverse().join("");
};

let output = reverseNumber(4423423);
console.log(output);
