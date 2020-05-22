var add = function(num1, num2) {
    return num1 + num2;
  }

var subtract = function(num1, num2) {
  return num1 - num2
}

var multiply = function(num1, num2) {
  return num1 * num2
}
var divide = function(num1, num2) {
  return num1 / num2
}

  var num1 = parseInt(prompt("Enter a kligong number"));
  var num2 = parseInt(prompt("Enter another kligong number"));
  var answer = subtract(num1, num2)
  alert(answer)