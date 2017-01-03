
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
var carDisplay;
var carInsert;
var carCounter = 0;
var newDiv = document.createElement("div");
var firstDiv = document.getElementById("carCards");
var textInput = document.getElementById("textBox");
var carDesciption = document.getElementsByClassName("description");


//********************//

function replaceDescription() {
	textInput.input()

}

function populatePage(e) {
	carObj = JSON.parse(e.target.responseText);
	for (i = 0; i < carObj.cars.length; i++) {
		carCounter++;

		// function format(newDiv, firstDiv) {
				// carDisplay += `<div>`
			carDisplay += `<div class="card card-block col-lg-3">
							<h4>${carObj.cars[i].year} ${carObj.cars[i].make} ${carObj.cars[i].model}</h4>
							<h5>$${carObj.cars[i].price}</h5>
							<h5 class="description">${carObj.cars[i].description}</h5>
							</div>`
			// if (carCounter % 4 === 1) {
			// 	// carDisplay += `</div>`
			// }
		// if (carCounter % 2 === 0) {

		// 	carDisplay[i].parentElement.nextSibling.
		// }
		// var carinsert = '<div>';
		// carInsert += carDisplay[i] + '</div>'
		// carInsert += carDisplay[i]
		// carInsert += '</div>'
		// newDiv.appendChild(carDisplay)
		// 	firstDiv.parentNode.insertBefore(newDiv, firstDiv.nextSibling);
		// document.body.insertBefore
		// if (i && (i % 3 === 0)) {


		}


document.getElementById("carCards").innerHTML = carDisplay;
// var carDesciption = document.getElementsByClassName("description");
console.log(carDesciption[1].innerHTML)
	}
// console.log(carDisplay)
loadInventory();



//function that only creates all eventhandlers for appl
//click of car element
//bind description to text input when start typing



document.querySelector("body").addEventListener("click", function activateEvents(e) {
carArray = document.querySelectorAll(".card");
console.log(carArray)

function resetBorder() {
	for (i = 0; i < carArray.length; i++) {
		carArray[i].classList.remove("value", "firstStyle")
		carArray[i].classList.remove("value", "red")
}

}
resetBorder();

//changes thickness of border of car element and background color, must accept
//2 arguments...#1 is car DOM element that was clicked...#2 is color name of
//choice
function changeBorder(e, color) {
	for (i = 0; i < carArray.length; i++) {
		var textInput = document.getElementById("textBox");
		var carDesciption = document.querySelectorAll(".description");
		carCounter += 1;
	if (e.target.classList.contains("card")) {
			textInput.focus();
			textInput.value = "";
			carDesciption = textInput.value;
			e.target.setAttribute("class", "firstStyle card col-lg-4 " + color);
	} else if (e.target.parentElement.classList.contains("card")) {
			textInput.focus();
			textInput.value = "";
			e.target.parentElement.setAttribute("class", "firstStyle card col-lg-4 " + color);
			carDesciption[i] += document.getElementById("textBox").value;
}


}

}

changeBorder(e, "red");
function replaceDescription(e) {
	for (i = 0; i < carArray.length; i++) {
	document.getElementById("carCards") = textInput.value;
}
}
})
