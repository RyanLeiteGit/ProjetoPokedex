// src/components/Pokemon/PokemonStats.jsx
import { coresStatus, nomesStatusDisplay } from "../../utils/pokemonUtils";

export default function PokemonStats({ stats }) {
    if (!stats) return null;

    return (
        <div className="status-container" style={{ marginTop: '30px' }}>
            <h4 className="titulo-tipagem">Status Base</h4>
            <div className="status-lista">
                {stats.map((s, index) => {
                    const porcentagem = (s.base_stat / 255) * 100;
                    return (
                        <div key={index} className="status-linha">
                            <span className="status-nome">
                                {nomesStatusDisplay[s.stat.name] || s.stat.name}
                            </span>
                            <span className="status-valor">{s.base_stat}</span>
                            <div className="barra-fundo">
                                <div 
                                    className="barra-preenchimento" 
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
    );
}