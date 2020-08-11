// question 1

for (i = 15; i < 26; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// question 2

function sentence() {
	console.log("I am a function");
}

var innerFunction = sentence;

function outerFunction(argument) {
	argument();
}

outerFunction(innerFunction);
