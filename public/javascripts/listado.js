let currentPage = 1;
const itemsPerPage = 20;
let buttonBack = document.querySelector('next-btn');

// Obtener datos de la API de Pokémon
async function getPokemonData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`);
  const data = await response.json();
  return data;
}

//creacion de los elementos
function displayPokemonData(pokemonData) {
  const pokemonList = document.getElementById('pokemon-list');
  pokemonList.innerHTML = '';
  for (const pokemon of pokemonData.results) {
    const listItem = document.createElement('li');
        const img = document.createElement('img');
        const pokemonId = pokemon.url.split('/')[6];
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`; // Obtener la imagen del Pokémon usando el ID en la URL
        img.alt = pokemon.name;
        img.className = 'pokemon-img';
        img.addEventListener('click',() => {
          window.location.href = `${pokemonId}`
        })
        listItem.textContent = pokemon.name;
        pokemonList.appendChild(listItem);
        listItem.appendChild(img);
  }
}


function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    getPokemonData().then(displayPokemonData);
  }
}


function nextPage() {
  currentPage++;
  getPokemonData().then(displayPokemonData);
}


document.getElementById('prev-btn').addEventListener('click', prevPage);
document.getElementById('next-btn').addEventListener('click', nextPage);


// Inicializar la paginación

getPokemonData().then(displayPokemonData);
