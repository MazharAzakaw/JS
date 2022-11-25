// 3.   Create list of Countries in an Array and call these list in HTML page with custom style like background-color, color etc.

let array = Array.from(["Japan", "Indonesia", "Portugal"]);

var ul = document.getElementById("countries");
array.forEach((item) => {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  li.setAttribute("style", "color: blue;");
  ul.appendChild(li);
});
