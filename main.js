
// function getNoun() {
// 	const myArray = ['Dog', 'Cat', 'Coffee', 'Library'];
// 	let item = myArray[Math.floor(Math.random() * myArray.length)]
// 	let x = document.getElementById('txt');
// 	x.value = item;	
// }

function getAdj() {
	const myArray = ['Running', 'Jumping', 'Sleeping', 'Dieing'];
	let item = myArray[Math.floor(Math.random() * myArray.length)]
	let x = document.getElementById('txt');
	x.value = item;
}

function getAdjAndNoun() {
	const myArray = ['Dog', 'Cat', 'Coffee', 'Library'];
	const myArray2 = ['Running', 'Jumping', 'Sleeping', 'Dieing'];
	let item = myArray2[Math.floor(Math.random() * myArray2.length)] + " " + myArray[Math.floor(Math.random() * myArray.length)];
	let x = document.getElementById('txt');
	x.value = item;	
}

// This getNoun function currently works but its pretty sloppy
// could make the fetch API call more DRY
// Also not sure th
function getNoun() {
	fetch('http://api.wordnik.com/v4/words.json/randomWord?api_key=4nj9t1spsnu7k02y4vhr8wct3qrqckgpyv41g252r3gy5qdqg')
	.then(function(response) {
	response.json().then(function(object) {
		console.log(object.word)
		let word = object.word
		console.log(word)
		// let x = document.getElementById('txt');
		// x.value = word;

		// not sure what .value means here
		document.getElementById('txt').value = word;
	})
})
}





