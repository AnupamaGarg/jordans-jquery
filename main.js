// // What is jQuery?
// // How do I access it?


// // First, let's go through the basic process of creating and appending an element with vanilla JavaScript and jquery

// create a new div
const vanilla = document.createElement("div");
const $jMagic = $("<div>");

// Give your div some text
vanilla.textContent = "This is vanilla JS!";
$jMagic.text("HELLO ITS JQUERY");

// Give it a class of "box"
vanilla.classList.add("box");
$jMagic.addClass("box");

// give it an id of "box-a"
vanilla.setAttribute("id", "box-a");
$jMagic.attr("id", "box-b");


// append it to the DOM
const containerVanilla = document.querySelector("#vanilla-container");
containerVanilla.appendChild(vanilla);

// $("#jquery-container").append($jMagic);
$jMagic.appendTo($("#jquery-container"));

// There are lot of ways to append things with jQuery! I personally like .appendTo() and .prependTo() a lot because they're nice when you want to chain jQuery methods.

// Now let's look at it all in one line
$("<div>")
.text("HELLO ITS JQUERY")
.addClass("box")
.attr("id", "box-b")
.appendTo($("#jquery-container"));



$("#create-card").click(() => {
  const $newCard = $("<div>").addClass("card");
  $("<h4>").addClass("name").attr("id", "name-heading").appendTo($newCard);
  $newCard.appendTo($("#card-container"))
})

// Next, target the inputs and add event listeners so that when the inputs change, the text on the card changes
$("#name-input").keyup(() => {
  const textValue = $("#name-input").val()
  $("#name-heading").text(textValue);
})

// What if we wanted to put an event listener on something that we added dynamically with javascript?
$("body").on("click", "#name-heading", ()=> {
  console.log('does it work??')
})