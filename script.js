// DOM Elements
const joke = document.getElementById('joke')
const loading = document.getElementById('loading')
const jokeButton = document.getElementById('joke-button')

let fetchedJoke

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	fetchJoke()
})

jokeButton.addEventListener('click', () => {
	fetchJoke()
})

// Functions

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': API_KEY,
	},
}

const fetchJoke = async () => {
	loading.style.opacity = 1
	jokeButton.disabled = true
	fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options)
		.then((res) => res.json())
		.then((data) => {
			fetchedJoke = data[0].joke
			renderJoke()
			loading.style.opacity = 0
			jokeButton.disabled = false
		})
		.catch((err) => {
			console.log(err)
		})
}

const renderJoke = () => {
	const span = document.createElement('span')
	span.classList.add(
		'animate-fade-right',
		'animate-duration-500',
		'animate-delay-100'
	)

	span.textContent = fetchedJoke
	joke.innerHTML = ''
	joke.appendChild(span)
}
