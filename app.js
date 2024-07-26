async function pedirPokemon() {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const json = await data.json()
    console.log(json)

    // const pokemon = json.results

    // for (const p of pokemon) {
    //     console.log(p.name)
    // }
}


pedirPokemon()