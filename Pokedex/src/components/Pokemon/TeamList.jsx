import Button from "../UI/Button";
import styles from "./TeamList.module.css";
import { tiposTraduzidos, capitalizarNome } from "../../utils/pokemonUtils";

export default function TeamList({ team, onSelectPokemon, onRemovePokemon }) {
    
    if (!team || team.length === 0) {
        return <p>Seu time está vazio. Busque e adicione Pokémons!</p>;
    }

    return (
        // 👇 APLICANDO A NOVA CLASSE DE GRID AQUI 👇
        <div className={styles['container-time']}>
            {team.map((pokemon, index) => (
                <div key={index} className={styles['card-time']}>
                    
                    <h4 className={styles['nome-pokemon']}>
                        {capitalizarNome(pokemon.name)}
                    </h4>
                    
                    <img 
                        src={pokemon.sprites?.front_default} 
                        alt={pokemon.name} 
                        className={styles['sprite-pokemon']}
                        onClick={() => onSelectPokemon(pokemon)}
                        style={{ cursor: "pointer" }}
                        title="Clique para ver os detalhes"
                    />
                    
                    <Button 
                        variant="danger" 
                        // 👇 Garantindo que a função é chamada passando o NOME ou o ID do pokemon
                        onClick={() => onRemovePokemon(pokemon.name)}
                    >
                        Remover
                    </Button>
                    
                    <div className={styles['tipos-container']}>
                        {pokemon.types?.map((t, i) => (
                            <div 
                                key={i} 
                                className={`${styles['bloco-tipo']} ${styles[`tipo-${t.type.name}`]}`}
                            >
                                {tiposTraduzidos[t.type.name] || t.type.name}
                            </div>
                        ))}
                    </div>
                    
                </div>
            ))}
        </div>
    );
}