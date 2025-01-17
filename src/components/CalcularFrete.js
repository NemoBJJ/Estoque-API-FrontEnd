import React, { useState } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A";

const CalcularFrete = () => {
    const [produtoId, setProdutoId] = useState("");
    const [cep, setCep] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState("");

    const calcular = async () => {
        try {
            const response = await axios.get(`http://localhost:8083/api/vendas/calcular-frete/${produtoId}`, {
                params: { cep },
                headers: { Authorization: TOKEN },
            });
            setResultado(response.data);
            setError("");
        } catch (err) {
            setError("Erro ao calcular frete: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div>
            <h2>Calcular Frete</h2>
            <input
                type="number"
                placeholder="ID do Produto"
                value={produtoId}
                onChange={(e) => setProdutoId(e.target.value)}
            />
            <input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
            />
            <button onClick={calcular}>Calcular</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {resultado && (
                <div>
                    <p>Produto: {resultado.produto}</p>
                    <p>Frete: {resultado.frete}</p>
                    <p>CEP: {resultado.cep}</p>
                </div>
            )}
        </div>
    );
};

export default CalcularFrete;
