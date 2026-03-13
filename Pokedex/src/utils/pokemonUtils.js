// src/utils/pokemonUtils.js

export const tiposTraduzidos = {
    normal: 'Normal', fire: 'Fogo', water: 'Água', grass: 'Grama',
    electric: 'Electric', ice: 'Gelo', fighting: 'Lutador', poison: 'Venenoso',
    ground: 'Terrestre', flying: 'Flying', psychic: 'Psíquico', bug: 'Inseto',
    rock: 'Rock', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio',
    steel: 'Aço', fairy: 'Fada'
};

const defesas = {
    normal: { fraco: ['fighting'], resiste: [], imune: ['ghost'] },
    fire: { fraco: ['water', 'ground', 'rock'], resiste: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'], imune: [] },
    water: { fraco: ['electric', 'grass'], resiste: ['fire', 'water', 'ice', 'steel'], imune: [] },
    grass: { fraco: ['fire', 'ice', 'poison', 'flying', 'bug'], resiste: ['water', 'electric', 'grass', 'ground'], imune: [] },
    electric: { fraco: ['ground'], resiste: ['electric', 'flying', 'steel'], imune: [] },
    ice: { fraco: ['fire', 'fighting', 'rock', 'steel'], resiste: ['ice'], imune: [] },
    fighting: { fraco: ['flying', 'psychic', 'fairy'], resiste: ['bug', 'rock', 'dark'], imune: [] },
    poison: { fraco: ['ground', 'psychic'], resiste: ['grass', 'fighting', 'poison', 'bug', 'fairy'], imune: [] },
    ground: { fraco: ['water', 'grass', 'ice'], resiste: ['poison', 'rock'], imune: ['electric'] },
    flying: { fraco: ['electric', 'ice', 'rock'], resiste: ['grass', 'fighting', 'bug'], imune: ['ground'] },
    psychic: { fraco: ['bug', 'ghost', 'dark'], resiste: ['fighting', 'psychic'], imune: [] },
    bug: { fraco: ['fire', 'flying', 'rock'], resiste: ['grass', 'fighting', 'ground'], imune: [] },
    rock: { fraco: ['water', 'grass', 'fighting', 'ground', 'steel'], resiste: ['normal', 'fire', 'poison', 'flying'], imune: [] },
    ghost: { fraco: ['ghost', 'dark'], resiste: ['poison', 'bug'], imune: ['normal', 'fighting'] },
    dragon: { fraco: ['ice', 'dragon', 'fairy'], resiste: ['fire', 'water', 'electric', 'grass'], imune: [] },
    dark: { fraco: ['fighting', 'bug', 'fairy'], resiste: ['ghost', 'dark'], imune: ['psychic'] },
    steel: { fraco: ['fire', 'fighting', 'ground'], resiste: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], imune: ['poison'] },
    fairy: { fraco: ['poison', 'steel'], resiste: ['fighting', 'bug', 'dark'], imune: ['dragon'] }
};

export const coresStatus = {
    hp: '#4caf50', attack: '#f44336', defense: '#ff9800',
    'special-attack': '#2196f3', 'special-defense': '#8bc34a', speed: '#e91e63'
};

export const nomesStatusDisplay = {
    hp: 'HP', attack: 'Ataque', defense: 'Defesa',
    'special-attack': 'Atq. Esp.', 'special-defense': 'Def. Esp.', speed: 'Velocidade'
};

export const capitalizarNome = (nome) => {
    if (!nome) return nome;
    return nome.charAt(0).toUpperCase() + nome.slice(1);
};

export const calcularFraquezas = (tipos) => {
    let multiplicadores = {};
    Object.keys(defesas).forEach(t => multiplicadores[t] = 1);

    tipos.forEach(t => {
        const def = defesas[t.type.name];
        if (def) {
            def.fraco.forEach(f => multiplicadores[f] *= 2);
            def.resiste.forEach(r => multiplicadores[r] *= 0.5);
            def.imune.forEach(i => multiplicadores[i] *= 0);
        }
    });

    const fraquezas = [];
    Object.keys(multiplicadores).forEach(tipo => {
        if (multiplicadores[tipo] > 1) {
            fraquezas.push({ tipo: tipo, dano: multiplicadores[tipo] });
        }
    });
    return fraquezas;
};