//12. Write a javascript function that generates all combination of a string.
//Example of String: cat
//Expected output: c, ca, cat, a, at,t

let possibleCombinations = (str) => {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
};
console.log(possibleCombinations("cat"));
