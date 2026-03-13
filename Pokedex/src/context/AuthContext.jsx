import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../services/authService";

const AuthContext = createContext(); //Cria uma "variavel global" que pode ser acessada sem passar de um componente para o outro


export function AuthProvider({ children }) { //Permite o uso da função em outros lugares da aplicação
    const [user, setUser] = useState(null); //Seta o usuario como nulo


    useEffect(() => { //Sincroniza o componente com algo externo
        const storedUser = localStorage.getItem("user"); // cria uma variavel para guardar usuario e atribui o valor do cache
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } //Verifica se existe valor, converte para js e atribui caso possivel
    }, []);


    async function login(username, password) {

    // MOCK LOGIN
    if (username === "miau" && password === "miau") {

        const fakeUser = { name: username };

        setUser(fakeUser);
        localStorage.setItem("user", JSON.stringify(fakeUser));

        return true;
    }

    // BACKEND
    /*
        try {
            const data = await loginRequest(username, password);

            setUser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    */

    return false;
}

    function logout() { //Remove user do estado e do localstorage
        setUser(null);
        localStorage.removeItem("user");
    }

    return ( //tudo que tiver aqui dentro vai ter acesso a login, logout e user
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
