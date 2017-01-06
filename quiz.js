
//XHR REQUEST

function loadInventory() {

var myCarsFile = new XMLHttpRequest();
myCarsFile.addEventListener("load", populatePage);
myCarsFile.open("GET", "https://spa-cars-mastery-exercise.firebaseio.com/.json");
myCarsFile.send();
}
//*********************//

//VARIABLES

var carObj;
var carDisplay = "";
var carCounter = 0;
var textInput = document.getElementById("textBox");
var carDesciption = "";


//*********FUNCTIONS***********//

function populatePage(e) {
	carObj = JSON.parse(e.target.responseText);
	for (i = 0; i < carObj.cars.length; i++) {
		carCounter++;
		carDisplay += `<div class="card card-block col-md-3">
						<h4>${carObj.cars[i].year} ${carObj.cars[i].make} ${carObj.cars[i].model}</h4>
						<h5>$${carObj.cars[i].price}</h5>
						<h5 class="description">${carObj.cars[i].description}</h5>
						</div>`
		}


	document.getElementById("carCards").innerHTML = carDisplay;
	}

loadInventory();



//function that only creates all eventhandlers for appl
//click of car element
//bind description to text input when start typing


function activateEvents() {

document.querySelector("body").addEventListener("click", function(e) {
	carArray = document.querySelectorAll(".card");
	resetBorder();
	changeBorder(e, "red");
});
document.getElementById("textBox").addEventListener("keyup", function(e){
	
	changeDescription(e);


})

function changeDescription() {
	carDesciption.children[2].innerHTML = textInput.value;
}

function resetBorder() {
	for (i = 0; i < carArray.length; i++) {
		carArray[i].classList.remove("value", "firstStyle")
		carArray[i].classList.remove("value", "red")
	}

}


//changes thickness of border of car element and background color, must accept
//2 arguments...#1 is car DOM element that was clicked...#2 is color name of
//choice
function changeBorder(e, color) {
	for (i = 0; i < carArray.length; i++) {
		if (e.target.classList.contains("card")) {
			textInput.focus();
			textInput.value = "";
			carDesciption = e.target;
			e.target.setAttribute("class", "firstStyle card col-md-3 " + color);
		} else if (e.target.parentElement.classList.contains("card")) {
			textInput.focus();
			textInput.value = "";
			carDesciption = e.target.parentElement;
			e.target.parentElement.setAttribute("class", "firstStyle card col-md-3 " + color);
		}
	}

}

}
activateEvents();
