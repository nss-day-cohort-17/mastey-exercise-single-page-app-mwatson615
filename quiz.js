
function loadInventory() {

var myCarsFile = new XMLHttpRequest();
myCarsFile.addEventListener("load", populatePage);
myCarsFile.open("GET", "https://spa-cars-mastery-exercise.firebaseio.com/.json");
myCarsFile.send();
}

function populatePage(e) {
	carObj = JSON.parse(e.target.responseText);
	var carDisplay = "";
	for (i = 0; i < carObj.cars.length; i++) {
		carDisplay += `<div class="card card-block">
									<h4>${carObj.cars[i].year} ${carObj.cars[i].make} ${carObj.cars[i].model}</h4>
									<h4>$${carObj.cars[i].price}</h4>
									<h5>${carObj.cars[i].description}</h5>
						</div>`
console.log(carDisplay)
document.getElementById("carCards").innerHTML = carDisplay;
	}
}
loadInventory();
