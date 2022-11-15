function math(operator){
  var number1 = Number(document.getElementById('num1').value);
  var number2 = Number(document.getElementById('num2').value);

  if (operator=="+"){
    console.log("Add");
    output = number1 + number2;
    document.getElementById("output").value = output;
  }
  if (operator=="-"){
    console.log("Subtract");
    output = number1 - number2;
    document.getElementById("output").value = output;
  }
  if (operator=="*"){
    console.log("Multiply");
    output = number1 * number2;
    document.getElementById("output").value = output;
  }
  if (operator=="/"){
    console.log("Divide");
    output = number1 / number2;
    document.getElementById("output").value = output;
  }
}
