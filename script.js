
var number1 = null;
var number2 = null;
var operatorPressed = null;


var numPress = function() {
//listen for number pressed
$(".keys-container").on("click", ".keys", function(event){

  var node = event.currentTarget;
  //grab the raw node with jQuery
  var elem = $(node);

  //if number1 has something in it and if operator has been pressed, we can move on to number 2
  if (number1 !== null && operatorPressed !==null) {

    //for multiple numbers in number2
    if (number2 !== null) {
      //add new number to existing number
      number2 = parseFloat(number2) + elem.text();
      //update console
      addText(number2);
    //first time number2 has been clicked
    } else {
      number2 = elem.text();
      addText(number2);
    }
  
  //for multiple numbers in number1
  } else if (number1 !==null) {
    number1 = parseFloat(number1) + elem.text();
    addText(number1);

  //first time number1 has been clicked
  } else {
    number1 = elem.text();
    addText(number1);
  }  

});

//listen for operator press
$(".operator-container").on("click", ".keys-dark", function(event){
  
  var node = event.currentTarget;
  //grab the raw node with jQuery
  var op = $(node);
  //set variable
  operatorPressed = op.text();
  //change color of operators in console
  changeOpColor();

 });

//listen for equals press
$(".operator-container").on("click", ".equals", function(event){

  var node = event.currentTarget;

  performCalc();

 });

//listen for clear button press
$(".clear-holder").on("click", ".key-clear", function(event){
  
  var node = event.currentTarget;

  performClear();

 });

}

//updates text in console
var addText = function(txt) {

  $(".text").text(txt);

}

//changes color of operators in console
var changeOpColor = function() {

  switch (operatorPressed) {
    case "+":
      $(".operand-add").css('color', 'red');
      break;
    case "/":
      $(".operand-div").css('color', 'red');
      break;
    case "*":
      $(".operand-mul").css('color', 'red');
      break;
    case "-":
      $(".operand-min").css('color', 'red');
      break;
  }
}

//performs clear
var performClear = function() {

  var consoleText = $(".text").text(" ");
  consoleText.empty();
  number1 = null;
  number2 = null;
  operatorPressed = null;
}

//performs calculations
var performCalc = function() {
var myResult;
//console.log("Operator Pressed is " + operatorPressed, "Number 1 is: " + number1, "Number 2 is: " + number2);

  switch (operatorPressed) {
    case "+":
      myResult = parseFloat(number1) + parseFloat(number2)
      break;
    case "/":
      myResult = parseFloat(number1) / parseFloat(number2)
      break;
    case "*":
      myResult = parseFloat(number1) * parseFloat(number2)
    break;
      case "-":
      myResult = parseFloat(number1) - parseFloat(number2)
      break;
  }
  //update console with result
  $(".text").text(myResult);
  //reset colors from operators
  $(".operands span").css('color', '#999caf');
}



$(function() {

  numPress();

});