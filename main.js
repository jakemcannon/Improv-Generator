
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

function getNoun() {
	// First fetch gets a random word and the queries the API for that exact word to check for the partOfSpeech
	fetch('http://api.wordnik.com/v4/words.json/randomWord?api_key=4nj9t1spsnu7k02y4vhr8wct3qrqckgpyv41g252r3gy5qdqg')
	.then((res) => res.json())
	.then((data) => {
		let word = data.word;
		return fetch('http://api.wordnik.com/v4/word.json/' + word + '/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&' + 'api_key=4nj9t1spsnu7k02y4vhr8wct3qrqckgpyv41g252r3gy5qdqg');
	})
	.then((res) => res.json())
	.then((data) => {
		data = data[0];
		let word = data.word
		console.log(data);
		console.log(data.partOfSpeech);
		if (data.partOfSpeech === 'noun') {
			console.log('Success')
			document.getElementById('txt').value = word;
		} else {
			console.log('Failes')
		}
	})
	.catch(error => console.log('ERROR'))
}





