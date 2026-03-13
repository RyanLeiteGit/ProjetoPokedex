import Button from "../UI/Button";
import styles from "./PokemonDetails.module.css"; 

import { 
    tiposTraduzidos, 
    coresStatus, 
    nomesStatusDisplay, 
    capitalizarNome, 
    calcularFraquezas 
} from "../../utils/pokemonUtils";

export default function PokemonDetails({ pokemon, onAdd, onClose }) {
    if (!pokemon) {
        return <p>Pesquise ou clique em um Pokémon para ver os detalhes!</p>;
    }

    const imagemAltaResolucao = pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default;
    const fraquezasDoPokemon = calcularFraquezas(pokemon.types);

    return (
        <div className={styles['detalhes-container']}>
            
            {/* CABEÇALHO */}
            <div className={styles['detalhes-header']}>
                <h3 className={styles['nome-pokemon']}>
                    {capitalizarNome(pokemon.name)}
                </h3>
                
                <div className={styles['detalhes-botoes']}>
                    {/* Botões agora usando as variantes do nosso novo CSS! */}
                    <Button onClick={onAdd} variant="primary">
                        Adicionar ao Time
                    </Button>
                    <Button onClick={onClose} variant="secondary">
                        Limpar
                    </Button>
                </div>
            </div>

            {/* CORPO DOS DETALHES */}
            <div className={styles['detalhes-corpo']}>
                
                {/* Imagem */}
                <div className={styles['detalhes-imagem-coluna']}>
                    <img 
                        src={imagemAltaResolucao} 
                        alt={pokemon.name} 
                        className={styles['imagem-grande']} 
                    />
                </div>

                {/* Informações (Tipos, Fraquezas e Status) */}
                <div className={styles['detalhes-info-coluna']}>
                    
                    {/* SEÇÃO 1: Tipos e Fraquezas */}
                    <div className={styles['secao-tipagem']}>
                        
                        {/* Tipos */}
                        <div className={styles['bloco-tipagem']}>
                            <h4 className={styles['titulo-tipagem']}>Tipo</h4>
                            <div className={styles['tipos-blocos']}>
                                {pokemon.types?.map((t, index) => (
                                    <div key={index} className={`${styles['bloco-tipo']} ${styles[`tipo-${t.type.name}`]}`}>
                                        {tiposTraduzidos[t.type.name] || t.type.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fraquezas */}
                        <div className={styles['bloco-fraquezas']} style={{ marginTop: '20px' }}>
                            <h4 className={styles['titulo-tipagem']}>Fraquezas</h4>
                            <div className={styles['tipos-blocos']}>
                                {fraquezasDoPokemon.map((fraqueza, index) => (
                                    <div key={index} className={`${styles['bloco-tipo']} ${styles[`tipo-${fraqueza.tipo}`]}`}>
                                        {tiposTraduzidos[fraqueza.tipo] || fraqueza.tipo}
                                        {fraqueza.dano === 4 && <span className={styles['icone-4x']}>*</span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* SEÇÃO 2: Status Base */}
                    <div className={styles['status-container']} style={{ marginTop: '30px' }}>
                        <h4 className={styles['titulo-tipagem']}>Status Base</h4>
                        <div className={styles['status-lista']}>
                            {pokemon.stats?.map((s, index) => {
                                const porcentagem = (s.base_stat / 255) * 100;
                                return (
                                    <div key={index} className={styles['status-linha']}>
                                        <span className={styles['status-nome']}>
                                            {nomesStatusDisplay[s.stat.name] || s.stat.name}
                                        </span>
                                        <span className={styles['status-valor']}>
                                            {s.base_stat}
                                        </span>
                                        <div className={styles['barra-fundo']}>
                                            <div 
                                                className={styles['barra-preenchimento']} 
                                                style={{ 
                                                    width: `${porcentagem}%`, 
                                                    backgroundColor: coresStatus[s.stat.name] || '#999' 
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}