function add(){
  var number1 = Number(document.getElementsById('num1').value);
  var number2 = Number(document.getElementsById('num2').value);
  var output = number1 + number2;
  document.getElementsById('output').innerHTML = output;
}
