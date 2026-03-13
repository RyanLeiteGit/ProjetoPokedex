import { useTeam } from "../../context/TeamContext";

function PokemonCard({ pokemon }) {

    const { removePokemon } = useTeam();

    if (!pokemon) {
        return null;
    }

    return (
        <div className="pokemon-card">

            <h3>{pokemon.name}</h3>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />

            <button
                onClick={() => removePokemon(pokemon.name)}
            >
                Remover
            </button>

        </div>
    );
}

export default PokemonCard;