
// function getNoun() {
// 	const myArray = ['Dog', 'Cat', 'Coffee', 'Library'];
// 	let item = myArray[Math.floor(Math.random() * myArray.length)]
// 	let x = document.getElementById('txt');
// 	x.value = item;	
// }

let wordnikAPI = "http://api.wordnik.com/v4/words.json/randomWord?api_key=4nj9t1spsnu7k02y4vhr8wct3qrqckgpyv41g252r3gy5qdqg"

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

function getNoun() {

	fetch('http://localhost:5000/noun')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data.word;
	})
}





