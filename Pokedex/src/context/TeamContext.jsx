import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const TeamContext = createContext();

export function TeamProvider({ children }) {
    const { user } = useAuth();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        if (user) {
            const storedTeam = localStorage.getItem(`team_${user.name}`);
            if (storedTeam) {
                setTeam(JSON.parse(storedTeam));
            } else {
                setTeam([]);
            }
        } else {
            setTeam([]);
        }
    }, [user]);


    useEffect(() => {
        if (user) {
            localStorage.setItem(`team_${user.name}`, JSON.stringify(team));
        }
    }, [team, user]);

    function addPokemon(pokemon) {
        if (team.length >= 6) return;

        const alreadyExists = team.find(p => p.name === pokemon.name);
        if (alreadyExists) return;

        setTeam([...team, pokemon]);
    }

    function removePokemon(name) {
        setTeam(team.filter(p => p.name !== name));
    }


    return (
        <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
            {children}
        </TeamContext.Provider>
    );
}

export function useTeam() {
    return useContext(TeamContext);
}
