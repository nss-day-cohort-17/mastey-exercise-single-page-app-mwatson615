


var cars;
function getCars() {

var myCarsFile = new XMLHttpRequest();
myCarsFile.addEventListener("load", loadInventory);
myCarsFile.open("GET", "https://spa-cars-mastery-exercise.firebaseio.com/.json");
myCarsFile.send();
}

getCars()

function loadInventory(e) {
	cars = JSON.parse(e.target.responseText);
	console.log(cars)
}
