var input=prompt("What is your age?");
console.log(input);
var today = new Date();
var year = today.getFullYear();
console.log(year);
var birth = Number(year) - Number(input);
document.getElementById('birthyear').innerHTML = birth;
