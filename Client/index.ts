import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/12/4";
const substrURL = "http://localhost:8080/substraction/256/12";
const multiplyURL = "http://localhost:8080/multiply/5/3";
const divURL = "http://localhost:8080/div/562/14";

fetch(sumURL)
  .then((body) => body.text())
  .then((json) => console.log(json));

fetch(substrURL)
  .then((body) => body.text())
  .then((json) => console.log(json));

fetch(multiplyURL)
  .then((body) => body.text())
  .then((json) => console.log(json));

fetch(divURL)
  .then((body) => body.text())
  .then((json) => console.log(json));
