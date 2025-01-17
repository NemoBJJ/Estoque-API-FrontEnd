import React, { useState } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A"; // Substitua pelo seu token válido

const SincronizarProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState("");

    const sincronizar = async () => {
        try {
            const response = await axios.get("http://localhost:8083/api/vendas/sincronizar", {
                headers: {
                    Authorization: TOKEN,
                },
            });
            setProdutos(response.data); // Atualiza a lista de produtos sincronizados
            setError(""); // Limpa os erros
        } catch (err) {
            setError("Erro ao sincronizar produtos: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div>
            <h2>Sincronizar Produtos</h2>
            <button onClick={sincronizar}>Sincronizar</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {produtos.map((produto, index) => (
                    <li key={index}>
                        Produto: {produto.produto}, Status: {produto.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SincronizarProdutos;
