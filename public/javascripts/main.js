

const api = 'https://pokeapi.co/api/v2/pokemon/'

let searchInput = document.querySelector('.search-pk');

searchInput.addEventListener('keypress', setquery);

function setquery(evt){
    if(evt.keyCode == 13){
        getResults(searchInput.value.toLowerCase());
        console.log(searchInput.value);
    }
}

function getResults(query){
    fetch( `${api}${query}`)
        .then(pokemons =>{
            console.log(pokemons);
            return pokemons.json()
            
        }).then(displayResults)
}
function displayResults(pokemons){
    let namepokemon = document.querySelector('.name-pokemon')
    namepokemon.innerHTML = `${pokemons.forms[0].name}`
    let imagen = document.querySelector('.image')
    imagen.innerHTML = `<img src="${pokemons.sprites.front_default}" >`
    console.log(pokemons.id);
    imagen.addEventListener("click", function(){
        window.location.href = `${pokemons.id}`
    })
}