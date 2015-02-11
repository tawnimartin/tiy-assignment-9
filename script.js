

var keyPress = function() {
$(".keys-container").on("click", ".keys", function(event){
  
  var node = event.currentTarget;
  
  var elem = $(node);
  
  alert("You clicked" + elem.text());
  
  addText(elem.text());
});

}

var addText = function(txt) {

  $(".text").text(txt);
}

$(function() {

	keyPress();

});
//steps:
//listen for the events
//input into console
//Highlight the little operands in red 
//performing the calc
//updating when you hit equal.
//also keep in mind it has to remember what was pressed after string of buttons are pressed, though only one shows at a time.