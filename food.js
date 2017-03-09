console.log("First line in JS file: ", Date.now());
var dogFoodContainer = document.getElementById("dogFoodContainer");

var dogFoodString = "";
var currentFood;
var currentType;
function makeDOM(xhrData){
	for (var i = 0; i < xhrData.dog_brands.length; i++) {
		currentFood = xhrData.dog_brands[i];

		  dogFoodString += `<div class="col-sm-6 col-md-4">`;
		  dogFoodString += `<div class="thumbnail">`;
		  dogFoodString += `<div><p>${currentFood.name} </p>`;
		  dogFoodString += `<p>${xhrData.dog_brands[i].types[0].type}</p>`;
		  dogFoodString += `<p>${xhrData.dog_brands[i].types[0].volumes[0].name}</p>`;
		  dogFoodString += `<p>${xhrData.dog_brands[i].types[0].volumes[0].price}</p>`;
		  dogFoodString += `</div></div></div>`;
		  console.log("my type",xhrData.dog_brands[0].types[0].volumes[0].name);


	}
	dogFoodContainer.innerHTML += dogFoodString;
	
}


function executeThisCodeAfterFileLoaded() {
	console.log("Yay, Your code works!");
	var data = JSON.parse(this.responseText);
	makeDOM(data);
}

function executeThisCodeAfterFileFails() {
	console.log("Sorry, Your code is broken.");

}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogfood.json");
myRequest.send();
console.log("Last line in JS file: ", Date.now());