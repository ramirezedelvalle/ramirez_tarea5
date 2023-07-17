const form = document.getElementById('pokemonForm');
const table = document.querySelector('table');
const phpButton = document.getElementById('phpButton');

table.style.display = 'none';

// Realizar consulta al Pokémon utilizando async/await
const searchPokemon = async (e) => {
    e.preventDefault();
    let pokemonName = document.getElementById('pokemonInput').value.trim(); // Utilizar trim() para eliminar espacios en blanco al inicio y final

    if (pokemonName === '') {
        // Validar si el campo de búsqueda está vacío solo al hacer clic en el botón de buscar
        if (e.submitter && e.submitter.id === 'submitButton') {
            alert('Ingresa el nombre del Pokémon');
        }
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const pokemonData = await response.json();

            document.getElementById('pokemonName').innerText = pokemonData.name;
            document.getElementById('pokemonWeight').innerText = pokemonData.weight;
            document.getElementById('pokemonHeight').innerText = pokemonData.height;
            document.getElementById('pokemonType').innerText = pokemonData.types[0].type.name;
            document.getElementById('pokemonImage').src = pokemonData.sprites.front_default;
            document.getElementById('status').innerText = '';
            table.style.display = '';
        } else {
            if (response.status === 404) {
                document.getElementById('status').innerText = 'No hay registro de este Pokémon. Verifique que el nombre sea el correcto.';
                document.getElementById('pokemonName').innerText = '';
                document.getElementById('pokemonWeight').innerText = '';
                document.getElementById('pokemonHeight').innerText = '';
                document.getElementById('pokemonType').innerText = '';
                document.getElementById('pokemonImage').src = '';
                table.style.display = 'none';
            } else {
                throw new Error('Error en la solicitud');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

// Realizar consulta al método utilizando async/await
const fetchMethod = async () => {
    try {
        const response = await fetch('./consulta.php');
        const data = await response.text();

        alert(data);
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', searchPokemon);
phpButton.addEventListener('click', fetchMethod);
