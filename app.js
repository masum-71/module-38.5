//task: 1
console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 3500);
console.log(4);
console.log(5);

//task: 2

const num = prompt("please give us a number");

const result = alert(
  `your number is added with 200 and the result is ${parseInt(num) + 200}`
);
