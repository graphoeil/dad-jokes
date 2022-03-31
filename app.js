// Variables
//
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const url = 'https://icanhazdadjoke.com';

// Bouton event
btn.addEventListener('click', () => {
	fetchDataJokes();
});

// Fetch data jokes
const fetchDataJokes = async() => {
	// Loading text ...
	result.textContent = 'Loading...';
	try {
		// Response
		const response = await fetch(url, {
			/* Nous passons via l'objet headers, le type 
			de retour que nous souhaitons 'application/json', 
			ainsi qu'un identifiant 'learning app' pour surveiller 
			l'usage de l'Api. https://icanhazdadjoke.com/api */
			headers:{
				Accept:'application/json',
				'User-Agent':'learning app'
			}
		});
		if (!response.ok){
			throw new Error('There was an error');
		}
		const data = await response.json();
		result.textContent = data.joke;
	} catch(error){
		console.log(error.message); // Failed to fetch
		result.textContent = 'There was an error...';
	}
};

// Init
fetchDataJokes();