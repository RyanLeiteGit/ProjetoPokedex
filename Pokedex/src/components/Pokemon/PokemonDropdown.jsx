import styles from "./PokemonDropdown.module.css"


import { capitalizarNome } from "../../utils/pokemonUtils"; 

function PokemonDropdown({ pokemons, onSelect }) {

    if (pokemons.length === 0) {
        return null;
    }

    return (
        <ul className={styles.dropdown}>

            {pokemons.map((p) => {

               
                const id = p.url.split("/")[6];

                return (
                    <li
                        key={p.name}
                        onClick={() => onSelect(p.name)}
                        className={styles.dropdownItem} 
                    >

                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            className={styles.pokemonIcon} 
                        />

                       
                        <span className={styles.pokemonName}>
                            {capitalizarNome(p.name)}
                        </span>

                    </li>
                );
            })}

        </ul>
    );
}

export default PokemonDropdown;