import React, { useState } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I";

const SimularPagamento = () => {
    const [produtoId, setProdutoId] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState("");

    const simular = async () => {
        try {
            const response = await axios.get(`http://localhost:8083/api/vendas/simular-pagamento/${produtoId}`, {
                headers: { Authorization: TOKEN },
            });
            setResultado(response.data);
            setError("");
        } catch (err) {
            setError("Erro ao simular pagamento: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div>
            <h2>Simular Pagamento</h2>
            <input
                type="number"
                placeholder="ID do Produto"
                value={produtoId}
                onChange={(e) => setProdutoId(e.target.value)}
            />
            <button onClick={simular}>Simular</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {resultado && (
                <div>
                    <p>Produto: {resultado.produto}</p>
                    <p>Preço Original: {resultado.preco_original}</p>
                    <p>Valor Final: {resultado.valor_final}</p>
                </div>
            )}
        </div>
    );
};

export default SimularPagamento;
