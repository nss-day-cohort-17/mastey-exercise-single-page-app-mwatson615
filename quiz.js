
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
		carDisplay += `<article class="card card-block" id="carId">
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
function resetBorder() {

}

//changes thickness of border of car element and background color, must accept
//2 arguments...#1 is car DOM element that was clicked...#2 is color name of
//choice
// function changeThickness() {
// 	for(i = 0; i < carArray.length; i++)

// }

//function that only creates all eventhandlers for appl
//click of car element
//bind description to text input when start typing

 
document.querySelector("body").addEventListener("click", function activateEvents(e) {
// 	//when click on car element, clear the value of text input in navbar, and put
// 	//cursor into nav bar
//need to target all elements in div, not just
carArray = document.querySelectorAll(".card")
for(i = 0; i < carArray.length; i++) {

	if (e.target.classList.contains("card")) {
		document.getElementById("textBox").focus();
		document.getElementById("textBox").value = "";
		e.target.setAttribute("class", "firstStyle");
	} else if (e.target.parentElement.classList.contains("card")) {
		document.getElementById("textBox").focus();
		document.getElementById("textBox").value = "";
		e.target.parentElement.setAttribute("class", "firstStyle");
	} else if (!e.target.parentElement.classList.contains("firstStyle") ) {
		e.target.previousSibling.removeAttribute("firstStyle");

//put in for loop following doc.qS(card) to get card array

// 	// 	// e.target.parentElement.setAttribute("class", "active");

// 	// }
// 	// if click on not firststyle, remove firststyle
}

}
console.log(carArray)
// }

})
// })
//function to reset border thickness and background color for each element back to original values


//EVENT HANDLER//


// if() {

// }

//************************//



// document.getElementById("showInventory").addEventListener("click", loadInventory);
