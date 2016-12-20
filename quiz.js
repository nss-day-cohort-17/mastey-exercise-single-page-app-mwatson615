
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
var textInput = document.getElementById("textBox");
var carCounter = 0;

//********************//

function populatePage(e) {
	carObj = JSON.parse(e.target.responseText);
	for (i = 0; i < carObj.cars.length; i++) {
		carDisplay += `<article class="card card-block">
							<h4>${carObj.cars[i].year} ${carObj.cars[i].make} ${carObj.cars[i].model}</h4>
							<h5>$${carObj.cars[i].price}</h5>
							<h5>${carObj.cars[i].description}</h5>
						</article>`
	carCounter += 1;
document.getElementById("carCards").innerHTML = carDisplay;

	}
// console.log(carDisplay)
}
loadInventory();

//add a function that resets the border thickness and background color for each 
//car element back to the original values
// function resetBorder() {

// }

//changes thickness of border of car element and background color, must accept
//2 arguments...#1 is car DOM element that was clicked...#2 is color name of
//choice
// function changeThickness(clickedCarDOMelem, colorName) {
// 	for(i = 0; i < carArray.length; i++)

// }

//function that only creates all eventhandlers for appl
//click of car element
//bind description to text input when start typing



document.querySelector("body").addEventListener("click", function activateEvents(e) {
carArray = document.querySelectorAll(".card");

function resetBorder() {
	for (i = 0; i < carArray.length; i++) {
		carArray[i].classList.remove("value", "firstStyle")
}

}
resetBorder();
var cardElement = document.getElementsByTagName("article");
var cardChange = document.getElementsByClassName("firstStyle");
function changeBorder(element, color) {
	for (i = 0; i < carArray.length; i++) {
	if (e.target.classList.contains("card")) {
			document.getElementById("textBox").focus();
			document.getElementById("textBox").value = "";
			e.target.setAttribute("class", "firstStyle card");
	} else if (e.target.parentElement.classList.contains("card")) {
			document.getElementById("textBox").focus();
			document.getElementById("textBox").value = "";
			e.target.parentElement.setAttribute("class", "firstStyle card");
	}
}
console.log(carArray)
}
changeBorder(cardElement, cardChange);

})
