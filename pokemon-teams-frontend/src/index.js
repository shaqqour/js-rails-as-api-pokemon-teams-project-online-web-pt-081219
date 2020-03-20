const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {

    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(json => renderAll(json));
});

function renderAll(jsonObject) {
    const main = document.getElementsByTagName("main")[0];
    
    for (const trainer of jsonObject) {

        const div = document.createElement("div");
        div.className = "card";

        const p = document.createElement("p");
        p.innerHTML = trainer.name
        div.appendChild(p);

        const button = document.createElement("button");
        button.innerHTML = "Add Pokemon";
        button.addEventListener("click", function(e) {
            addPokemon(trainer);
        });
        div.appendChild(button);

        const ul = document.createElement("ul");
        for (const pokemon of trainer.pokemons) {
            const li = document.createElement("li");

            const button = document.createElement("button");
            button.className = "release";
            button.innerHTML = "Release";

            li.innerHTML = pokemon.nickname + " (" + pokemon.species + ")";
            li.appendChild(button);
            ul.appendChild(li);
            div.appendChild(ul);
        }
        
        main.appendChild(div)
    }
    
}

function addPokemon(trainer) {
    let formData = {
        pokemonName: "Byron",
        pokemonSpecies: "Poodle"
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    fetch(TRAINERS_URL, configObj)
    .then(response => response.json())
    .then(json => console.log(json));
}