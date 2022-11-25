//14. Write a Javascript function which will take an array of numbers stored and find the scond lowest and second greatest numbers respectively.
//Sample Array: [1,2,3,4,5]
//Expected output: 2,4

const secondLowest = (arr) => arr.sort((a, b) => a - b)[1];

const secondLargest = (arr) => arr.sort((a, b) => b - a)[1];

let arr1 = [1, 2, 3, 4, 5];
console.log(`${secondLowest(arr1)} , ${secondLargest(arr1)}`);
