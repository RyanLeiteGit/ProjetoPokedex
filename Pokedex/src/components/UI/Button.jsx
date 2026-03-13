// src/components/UI/Button.jsx
import styles from "./Button.module.css"; 

// O componente recebe 'variant' para definir o estilo
function Button({ children, className, variant = 'primary', ...props }) {
    
    // Concatena as classes: base (.btn) + a variante escolhida (ex: .primary) + qualquer className extra
    const combinedClassName = `${styles.btn} ${styles[variant]} ${className || ''}`;

    return (
        <button 
            className={combinedClassName} 
            {...props} 
        >
            {children}
        </button>
    );
}

export default Button;