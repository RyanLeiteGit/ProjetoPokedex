import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

import styles from "./Login.module.css"; 

import fundoPokemon from "../assets/fundo.jpg"; 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const success = await login(username, password);

        if (success) {
            navigate("/home");
        } else {
            alert("Login inválido");
        }
    }

    return (
        // Fundo da página com a imagem aplicada via style inline
        <div 
            className={styles['login-page']}
            style={{ backgroundImage: `url(${fundoPokemon})` }}
        > 

            {/* A Carcaça Vermelha da Pokédex */}
            <div className={styles['pokedex-body']}>
                
                {/* Lente Azul e LEDs (Topo) */}
                <div className={styles['pokedex-top']}>
                    <div className={styles['big-blue-light']}>
                        <div className={styles['reflection']}></div>
                    </div>
                    <div className={styles['small-lights']}>
                        <div className={`${styles['led']} ${styles['red']}`}></div>
                        <div className={`${styles['led']} ${styles['yellow']}`}></div>
                        <div className={`${styles['led']} ${styles['green']}`}></div>
                    </div>
                </div>

                {/* A Telinha (Onde fica o Formulário) */}
                <form className={styles['pokedex-screen']} onSubmit={handleSubmit}>
                    
                    <h2 className={styles['screen-title']}>POKEDEX</h2>

                    <Input
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles['poke-input']}
                    />
                  
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles['poke-input']}
                    />

                    <Button type="submit" className={styles['poke-btn']}>
                        ENTRAR
                    </Button>

                </form>

            </div>
        </div>
    );
}

export default Login;