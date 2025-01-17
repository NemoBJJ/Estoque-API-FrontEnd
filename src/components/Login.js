import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState("");

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8083/api/auth/login", {
                username,
                password,
            });
            setToken(response.data.token);
            setError("");
        } catch (err) {
            setError("Erro ao fazer login: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {token && (
                <div>
                    <p>Token: {token}</p>
                </div>
            )}
        </div>
    );
};

export default Login;
