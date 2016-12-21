
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
		carDisplay += `<article class="card card-block col-md-3">
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

// function searchDescription() {
// 	for (i = 0; i < carArray.length; i++)
// 		var objDescription = carObj.cars.description;
// 		var searchInput = document.getElementById("textBox")
// 	if (objDescription == searchInput) {
// 		document.getElementById("textBox").innerHTML = objDescription;
// 		// 	function(data) {
// 		// 		return data.code === carObj.cars[i].description
// 		// 	})
// 		// carObj.cars[i].description
// 	}
// 		console.log(objDescription)
// }
// searchDescription();

function resetBorder() {
	for (i = 0; i < carArray.length; i++) {
		carArray[i].classList.remove("value", "firstStyle")
}

}
resetBorder();
var cardElement = document.getElementsByTagName("article");
var cardChange = document.getElementsByClassName("");
function changeBorder(element, color) {
	for (i = 0; i < carArray.length; i++) {
	if (e.target.classList.contains("card")) {
			document.getElementById("textBox").focus();
			document.getElementById("textBox").value = "";
			e.target.setAttribute("class", "firstStyle card col-md-3");
	} else if (e.target.parentElement.classList.contains("card")) {
			document.getElementById("textBox").focus();
			document.getElementById("textBox").value = "";
			e.target.parentElement.setAttribute("class", "firstStyle card col-md-3");
	} else if (i > 2)
		e.target.setAttribute("class", "firstStyle card row col-md-3")
		e.target.parentElement.setAttribute("class", "firstStyle card row col-md-3")
}
// console.log(carArray)
}
changeBorder(element, "blue");

})
