


var cars;
function getCars() {

var myCarsFile = new XMLHttpRequest();
myCarsFile.addEventListener("load", saveCars);
myCarsFile.open("GET", "https://spa-cars-mastery-exercise.firebaseio.com/");
userRequest.send();
}

function saveCars(e) {
	cars = JSON.parse(e.target.responseText);
	console.log("hi")
}
