
// function getAdjAndNoun() {
// 	const myArray = ['Dog', 'Cat', 'Coffee', 'Library'];
// 	const myArray2 = ['Running', 'Jumping', 'Sleeping', 'Dieing'];
// 	let item = myArray2[Math.floor(Math.random() * myArray2.length)] + " " + myArray[Math.floor(Math.random() * myArray.length)];
// 	let x = document.getElementById('txt');
// 	x.value = item;	
// }

function getNoun() {

	fetch('http://localhost:5000/noun')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data.word;
	})
}

function getAdj() {

	fetch('http://localhost:5000/adjective')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data.word;
	})
}




