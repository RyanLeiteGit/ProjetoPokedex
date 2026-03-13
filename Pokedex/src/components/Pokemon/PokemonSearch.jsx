import { useState, useEffect } from "react";
import { getPokemonList, getPokemon } from "../../services/pokemonService";
import Input from "../UI/Input";
import PokemonDropdown from "./PokemonDropdown";

import styles from "./PokemonSearch.module.css"

function PokemonSearch({ onSelectPokemon }) {

    const [search, setSearch] = useState("");
    const [pokemonList, setPokemonList] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        async function loadList() {
            const list = await getPokemonList();
            setPokemonList(list);
        }

        loadList();
    }, []);

    function handleChange(e) {

        const value = e.target.value.toLowerCase();
        setSearch(value);

        if (value === "") {
            setFiltered([]);
            return;
        }

        const results = pokemonList.filter(p =>
            p.name.includes(value)
        );

        setFiltered(results.slice(0, 6));
    }

    async function selectPokemon(name) {

        const pokemon = await getPokemon(name);

        onSelectPokemon(pokemon);

        setSearch("");
        setFiltered([]);
    }

    return (
        <div className={styles.searchContainer}>

            <Input
                value={search}
                onChange={handleChange}
                placeholder="Digite o nome do pokemon"
                className={styles.searchInput}
            />

            <PokemonDropdown
                pokemons={filtered}
                onSelect={selectPokemon}
            />

        </div>
    );
}

export default PokemonSearch;