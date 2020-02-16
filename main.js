function getNoun() {

	fetch('http://localhost:5000/noun')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data.word;
	})
	.catch((err) => console.log(err))
}

function getAdj() {

	fetch('http://localhost:5000/adjective')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data.word;
	})
	.catch((err) => console.log(err))
}

function getAdjAndNoun() {
	fetch('http://localhost:5000/adjective_and_noun')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data;
	})
	.catch((err) => console.log(err))
}




