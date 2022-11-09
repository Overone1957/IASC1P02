var input=prompt("What is your age?");
console.log(input);
var year = getFullYear();
console.log(year);
var birth = Number(year) - Number(input);
document.getElementById("birthyear").innerHTML="birth";
