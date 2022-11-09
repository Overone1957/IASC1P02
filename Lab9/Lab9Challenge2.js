var input=prompt("What is your age?");
console.log(input);
var today = new Date();
console.log(today);
var year = getFullYear();
console.log(year);
var birth = year.getFullYear() - Number(input);
document.getElementById('birthyear').innerHTML = birth;
