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

function getAdjAndNoun() {
	fetch('http://localhost:5000/adjective_and_noun')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('txt').value = data;
	})
}




