// DOM Elements
const joke = document.getElementById('joke')
const loading = document.getElementById('loading')
const jokeButton = document.getElementById('joke-button')
const loadingText = document.getElementById('loading-text')
const copy = document.getElementById('copy')

// Variables
let fetchedJoke // Globally storing the fetched joke
const loadingArray = [
	'Unpacking dad jokes... Handle with extreme laughter!',
	'Gathering puns and dad wisdom... Brace yourself!',
	"Summoning dad-level humor... It's loading slower than a dad joke at a family dinner.",
	"Brewing the perfect dad joke... It's like waiting for your dad to finish a story.",
	'Loading giggles... Warning: may cause uncontrollable laughter.',
	"Spinning the dad joke generator wheel... Hope you're ready for a dad-tastic time!",
	'Assembling dad jokes... This might take longer than a dad taking forever in a hardware store.',
	"Downloading dad jokes... Your patience is appreciated, unlike a dad's dance moves.",
	'Generating dad-approved humor... Please stand by for dad-level wit.',
	"Preparing a fresh batch of dad jokes... Don't worry, it's not as long as a dad's grocery list.",
] // Array of loading texts

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	fetchJoke()
})

jokeButton.addEventListener('click', () => {
	fetchJoke()
})

copy.addEventListener('click', () => {
	copyText()
})

// Functions

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': API_KEY,
	},
}

/**
 * Fetches a joke from the API and renders it on the page.
 *
 * @return {Promise<void>} This function does not return anything.
 */
const fetchJoke = async () => {
	loading.style.opacity = 1
	jokeButton.disabled = true
	joke.style.opacity = 0
	loadingText.textContent =
		loadingArray[Math.floor(Math.random() * loadingArray.length)]

	fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options)
		.then((res) => res.json())
		.then((data) => {
			fetchedJoke = data[0].joke
			renderJoke()
			loading.style.opacity = 0
			jokeButton.disabled = false
			joke.style.opacity = 1
		})
		.catch((err) => {
			console.log(err)
		})
}

/**
 * Renders the fetched joke on the webpage.
 *
 * @param {string} fetchedJoke - The joke to be rendered.
 * @return {void} This function does not return any value.
 */
const renderJoke = () => {
	joke.textContent = fetchedJoke
}

/**
 * Copies the text content of the joke element to the clipboard.
 *
 * @param {none}
 * @return {none}
 */
const copyText = () => {
	navigator.clipboard.writeText(joke.textContent)
}
