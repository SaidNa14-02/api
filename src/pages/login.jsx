import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Sesión iniciada");
            navigate("/dashboard");
        } catch (error) {
            alert("Error al iniciar sesión");
        }
    };

    return (
        <form onSubmit={login}>
            <h2>Iniciar sesión</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}

export default Login;