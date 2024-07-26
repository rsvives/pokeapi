async function pedirPokemon() {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const json = await data.json()
    // console.log(json)

    const pokemon = json.results

    const pokemonList = document.getElementById('pokemon-list')

    for (const p of pokemon) {
        // console.log(p.name)
        // crear div
        const pokemonDiv = document.createElement('div')
        pokemonDiv.className = 'pokemon'
        // meter dentro el nombre (con un h3)
        pokemonDiv.innerHTML = `<h3>${p.name}</h3>`
        // añadir al pokemon-list
        pokemonList.append(pokemonDiv)
    }


}


pedirPokemon()