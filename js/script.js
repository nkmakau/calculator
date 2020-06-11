//Business (back-end) logic:
var add = function (num1, num2) {
  return num1 + num2;
}

var subtract = function (num1, num2) {
  return num1 - num2
}

var multiply = function (num1, num2) {
  return num1 * num2
}
var divide = function (num1, num2) {
  return num1 / num2
}

//Everything below this line is UI (Front-end) logic:
//addtition
$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault()
    var num1 = parseInt($("#add1").val())
    var num2 = parseInt($("#add2").val())
    var answer = add(num1, num2)
    $("#output").text(answer)
  })

//subtraction
  $("form#sub").submit(function (event) {
    event.preventDefault()
    var num1 = parseInt($("#sub1").val())
    var num2 = parseInt($("#sub2").val())
    var answer = subtract(num1, num2)
    $("#output1").text(answer)
  })

  //Multiplication
  $("form#mult").submit(function (event) {
    event.preventDefault()
    var num1 = parseInt($("#mult1").val())
    var num2 = parseInt($("#mult2").val())
    var answer = multiply(num1, num2)
    $("#output2").text(answer)
  })

//Division
  $("form#divi").submit(function (event) {
    event.preventDefault()
    var num1 = parseInt($("#divi1").val())
    var num2 = parseInt($("#divi2").val())
    var answer = divide(num1, num2)
    $("#output3").text(answer)
  })
})
