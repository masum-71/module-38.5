//task: 1

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 3500);
// console.log(4);
// console.log(5);

//task: 2

// const num = prompt("please give us a number");

// const result = alert(
//   `your number is added with 200 and the result is ${parseInt(num) + 200}`
// );

//task: 3

/*
Q: What is cookies

A: A cookie is an amount of information that persists between a server-side and a client-side. 
A web browser stores this information at the time of browsing.
A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. 
It maintains the state of a user and remembers the user's information among all the web pages.
In JavaScript, we can create, read, update and delete a cookie by using document.cookie property.

*/

//level: 1
const obj = {
  firstName: "Abrahan",
  lastName: "linkon",
};

localStorage.setItem("name", JSON.stringify(obj));

//level: 2
const count = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  let countValue = parseInt(document.getElementById("count").innerText);
  count.innerText = countValue + 1;

  localStorage.setItem("num", count.innerText);
});

const get = localStorage.getItem("num");
count.innerText = get;

//level: 3


