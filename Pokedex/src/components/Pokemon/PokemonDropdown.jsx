import styles from "./PokemonDropdown.module.css"

// 👇 Importando a função de deixar a 1ª letra maiúscula
import { capitalizarNome } from "../../utils/pokemonUtils"; 

function PokemonDropdown({ pokemons, onSelect }) {

    if (pokemons.length === 0) {
        return null;
    }

    return (
        <ul className={styles.dropdown}>

            {pokemons.map((p) => {

                // Sua lógica mantida intacta!
                const id = p.url.split("/")[6];

                return (
                    <li
                        key={p.name}
                        onClick={() => onSelect(p.name)}
                        className={styles.dropdownItem} // 👈 Nova classe aqui
                    >

                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            className={styles.pokemonIcon} // 👈 Classe controlando o tamanho da imagem
                            alt={p.name}
                        />

                        {/* 👇 Envolvendo o nome em um span para estilizar e capitalizar */}
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