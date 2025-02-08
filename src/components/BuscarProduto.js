import React, { useState } from "react";
import axios from "axios";

const BuscarProduto = () => {
    const [id, setId] = useState("");
    const [produto, setProduto] = useState(null);
    const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I";

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://3.217.55.187:8083/api/produtos/${id}`, {
                headers: {
                    Authorization: TOKEN,
                },
            });
            setProduto(response.data);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            alert(`Erro: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h1>Buscar Produto</h1>
            <div>
                <label>ID do Produto:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
            {produto && (
                <div>
                    <h2>Detalhes do Produto</h2>
                    <p>ID: {produto.id}</p>
                    <p>Nome: {produto.nome}</p>
                    <p>Preço: {produto.preco}</p>
                </div>
            )}
        </div>
    );
};

export default BuscarProduto;
