import React, { useState } from "react";
import axios from "axios";

const HealthCheck = () => {
    const [status, setStatus] = useState("");

    const checkHealth = async () => {
        try {
            const response = await axios.get("http://localhost:8083/health");
            setStatus(response.data);
        } catch (err) {
            setStatus("Erro ao verificar status da aplicação.");
        }
    };

    return (
        <div>
            <h2>Health Check</h2>
            <button onClick={checkHealth}>Verificar</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default HealthCheck;
