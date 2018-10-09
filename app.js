document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
	e.preventDefault();
	const number = document.getElementById('number').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

	xhr.onload = function () {
		if (this.status === 200) {

			const response = JSON.parse(this.responseText);
			let output = '';

			if (response.type === 'success') {
				response.value.forEach(joke => {
					output +=
						`<li>${joke.joke}</li>`
				});
			} else {
				output += `Error! Sth went wrong :( ${this.status}`;
			}
			console.log(output);
			
			document.querySelector('.jokes').innerHTML = output;
		}
	}
	xhr.send();
}






























