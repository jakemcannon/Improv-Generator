
function getNoun() {
	const myArray = ['Dog', 'Cat', 'Coffee', 'Library'];
	let item = myArray[Math.floor(Math.random() * myArray.length)]
	let x = document.getElementById('txt');
	x.value = item;	
}

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