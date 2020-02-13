
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


// fetch() tutorial
// https://www.youtube.com/watch?v=cuEtnrL9-H0
//
// Fetch is promised base
// We can use asynch await
// or
// .then() and .catch()

// fetch('https://reqres.in/api/users')
// 	.then(res => {
// 	 if (res.ok) {
// 	 	console.log('SUCCESS')
// 	 } else {
// 	 	console.log('Not Successful')
// 	 }
// 	})
// 	.then(data => console.log(data))
// 	.catch(error => console.log('ERROR'))


//use this API (Note, if you don't pay 5$ it takes 7 days to recieve..)
//https://developer.wordnik.com/gettingstarted