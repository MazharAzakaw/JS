//4. Create Mark sheet in Switch Case where user enter Numbers then in console generate a Result like First Division, Second Division, etc.

let studentMarks = [89, 78, 53, 98];
let totalMarks = 400;
let sum = 0,
  grade = null;

for (i = 0; i < studentMarks.length; i++) {
  sum += studentMarks[i];
}
let totalObtainedMarks = sum;
let percentage = Math.round((totalObtainedMarks / totalMarks) * 100);

if (percentage >= 85) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}
switch (grade) {
  case "A":
    console.log("First Division");
    break;
  case "B":
    console.log("Second Division");
    break;
  case "C":
    console.log("First Division");
    break;
  case "D":
    console.log("Fourth Division");
    break;
  case "default":
    console.log("Last Division");
    break;
}
