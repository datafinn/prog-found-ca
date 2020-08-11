// question 1
var name;

name = "Finn";

// question 2

var person = {
	firstName: "Finn",
	age: 32,
};

// question 3

var outOfStock = false;

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}

// question 4

var numbersArray = [1, 2, 3, 4, 5];

for (i = 0; i < numbersArray.length; i++) {
	console.log(numbersArray[i]);
}

// question 5

for (i = 15; i < 26; i++) {
	console.log(i);
}

// question 6

for (i = 15; i < 26; i++) {
	if (i === 20) {
		console.log(i);
	}
}

// question 7

var couplesArray = [
	{ name: "Finn", age: 31, male: true },
	{ name: "Karina", age: 27, male: false },
];

for (i = 0; i < couplesArray.length; i++) {
	console.log(couplesArray[i].age);
	console.log(couplesArray[i].male);
}

// question 8

function whatIDontLike(dontLike) {
	console.log("I don't like " + dontLike + ".");
}

whatIDontLike("salad");

// question 9

function firstMinusSecond(firstNumber, secondNumber) {
	var result = firstNumber - secondNumber;
	console.log(result);
}

firstMinusSecond(5, 2);

// question 10

var petCollection = [];

function addPetToCollection(newPet) {
	petCollection.push(newPet);
}

addPetToCollection("Skippy");
