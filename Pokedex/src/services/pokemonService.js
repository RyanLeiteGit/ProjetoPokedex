const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemon(name) {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Pokémon não encontrado");
    }

    return response.json();
}

export async function getPokemonList() {
    const response = await fetch(`${BASE_URL}/pokemon?limit=1000`);

    if (!response.ok) {
        throw new Error("Erro ao buscar lista");
    }

    const data = await response.json();

    return data.results;
}