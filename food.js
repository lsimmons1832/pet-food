console.log("First line in JS file: ", Date.now());
var dogFoodContainer = document.getElementById("dogFoodContainer");

var dogFoodString = "";
var currentFood;
var currentSize;
var currentPrice;

function makeDogDOM(xhrData){
	for (var i = 0; i < xhrData.dog_brands.length; i++) {
		currentFood = xhrData.dog_brands[i];

		  dogFoodString += `<div><p>Brand: ${currentFood.name} </p>`;

		for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
		  	dogFoodString += `<p>Type: ${xhrData.dog_brands[i].types[j].type}</p>`;

		  	for (var k = 0; k < xhrData.dog_brands[i].types[j].volumes.length; k++) {
		  		currentSize = xhrData.dog_brands[i].types[j].volumes[k];

		  		dogFoodString += `<p>Size: ${xhrData.dog_brands[i].types[j].volumes[k].name}</p>`
		  		dogFoodString += `<p>Price: ${xhrData.dog_brands[i].types[j].volumes[k].price}</p>`
		  		dogFoodString += `</div>`;
		  	}
		  }
		}
	dogFoodContainer.innerHTML += dogFoodString;
		
}

function dogfood() {
	console.log("Yay, Your dog code works!");
	var data = JSON.parse(this.responseText);
	makeDogDOM(data);
}

function executeThisCodeAfterFileFails() {
	console.log("Sorry, Your code is broken.");

}

var dogFoodRequest = new XMLHttpRequest();
dogFoodRequest.addEventListener("load", dogfood);
dogFoodRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogFoodRequest.open("GET", "dogfood.json");
dogFoodRequest.send();

var catFoodContainer = document.getElementById("catFoodContainer");
var catFoodString = "";
var catFood;
var currentOz;

function makeCatDOM(xhrData){
	for (var i = 0; i < xhrData.cat_brands.length; i++) {
		catFood = xhrData.cat_brands[i];

		  catFoodString += `<div><p>Brand: ${catFood.name} </p>`;
		  catFoodString += `<p>Breeds: ${catFood.breeds} </p>`;

		for (var j = 0; j < xhrData.cat_brands[i].types.length; j++) {
		  	catFoodString += `<p>${xhrData.cat_brands[i].types[j].type}</p>`;

		  	for (var k = 0; k < xhrData.cat_brands[i].types[j].volumes.length; k++) {
		  		currentOz = xhrData.cat_brands[i].types[j].volumes[k];

		  		catFoodString += `<p>Size: ${xhrData.cat_brands[i].types[j].volumes[k].name}</p>`
		  		catFoodString += `<p>Price: ${xhrData.cat_brands[i].types[j].volumes[k].price}</p>`
		  		catFoodString += `</div>`;
		  	}
		  }
		}
	catFoodContainer.innerHTML += catFoodString;
		
}



function executeCatFood() {
	console.log("Yay, Your cat code works!");
	var data = JSON.parse(this.responseText);
	console.log("what's going on here?", data);
	makeCatDOM(data);
}


function cantExecute() {
	console.log("Sorry, Your code is broken.");

}

var catFoodRequest = new XMLHttpRequest();
catFoodRequest.addEventListener("load", executeCatFood);
catFoodRequest.addEventListener("error", cantExecute);
catFoodRequest.open("GET", "catfood.json");
catFoodRequest.send();
