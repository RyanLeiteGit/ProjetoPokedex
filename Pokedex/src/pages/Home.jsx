import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTeam } from "../context/TeamContext";

import Button from "../components/UI/Button";
import PokemonSearch from "../components/Pokemon/PokemonSearch";
import PokemonDetails from "../components/Pokemon/PokemonDetails";
import TeamList from "../components/Pokemon/TeamList";

import "./Home.css"; 

function Home() {
    const { logout } = useAuth();
    const { team, addPokemon, removePokemon } = useTeam(); 
    const [pokemonSelecionado, setPokemonSelecionado] = useState(null);

    const adicionarAoTime = () => {
        if (team.length >= 6) {
            alert("Seu time já está completo com 6 Pokémons!");
            return;
        }
        addPokemon(pokemonSelecionado);
    };

    return (
        <div className="home-container">
            
            <header className="header-area" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>Pokedex</h1>
                <Button onClick={logout} variant="header">Sair</Button>
            </header>

            <section className="pokemons-area">
                <h2>Detalhes do Pokémon</h2>
                <PokemonDetails 
                    pokemon={pokemonSelecionado} 
                    onAdd={adicionarAoTime}
                    onClose={() => setPokemonSelecionado(null)}
                />
            </section>

            <aside className="filtros-area">
                <h2>Filtros e Busca</h2>
                <PokemonSearch onSelectPokemon={setPokemonSelecionado} />
            </aside>

            <footer className="visualizacao-area">
                <h2>Seu Time ({team.length}/6)</h2>
                <TeamList 
                    team={team} 
                    onSelectPokemon={setPokemonSelecionado} 
                    onRemovePokemon={removePokemon} 
                />
            </footer>

        </div>
    );
}

export default Home;