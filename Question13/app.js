//13. Write a Javascript function that returns even or odd values from an array. Basically array takes a parameter and it separate the array in even or odd.
function checkNumbers(arr, type) {
  arr = arr + "";
  let array = [];
  arr.split("").forEach((number) => {
    if (type.toLowerCase() === "even") {
      if (number % 2 === 0) {
        array.push(number);
      }
    } else {
      if (number % 2 === 1) {
        array.push(number);
      }
    }
  });
  return array;
}
var arr = [123456];
let arrayEven = checkNumbers(arr, "Even");
let arrayOdd = checkNumbers(arr, "Odd");
console.log(arrayEven);
console.log(arrayOdd);
