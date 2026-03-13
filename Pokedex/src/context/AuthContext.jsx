import { createContext, useState, useEffect } from "react";
import { loginRequest } from "../services/authService";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Quando a aplicação é carregada, verifica se já existe um utilizador guardado
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Função de login que comunica com o backend real
    async function login(username, password) {
        try {
            const data = await loginRequest(username, password);

            // Nota: Se o seu Django devolver os dados diretamente na raiz de 'data' em vez de 'data.user', 
            // basta alterar para 'const userData = data;'
            const userData = data.user || { username: username }; 

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            return true;
        } catch (error) {
            console.error("Falha no login:", error);
            return false;
        }
    }

    // Função para terminar a sessão
    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}