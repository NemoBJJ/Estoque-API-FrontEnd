import React, { useState } from "react";
import axios from "axios";

const SincronizarProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState("");

    const sincronizar = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/vendas/sincronizar`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I",
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
