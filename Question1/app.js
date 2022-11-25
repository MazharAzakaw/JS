//----------------- Question1----------------------------
//1.       Create any One Example of Call Back Function with three parameters.

let subjectPerson = (a) => a;

function doHomework(subject, subjectTime) {
  console.log(`Who Started ${subject} homework?`);
  subjectTime(subject, "2:00 PM", subjectPerson("Mazhar"));
}
let alertFinished = (subject, time, subjectPerson) => {
  console.log(
    `${subjectPerson} started and  Finished  ${subject} homework at ${time}`
  );
};
doHomework("math", alertFinished);
