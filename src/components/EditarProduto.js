import React, { useState } from "react";
import axios from "axios";

const EditarProduto = () => {
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A";

    const handleUpdate = async () => {
        try {
            const produtoAtualizado = { nome, preco: parseFloat(preco) };
            await axios.put(`http://localhost:8083/api/produtos/${id}`, produtoAtualizado, {
                headers: {
                    Authorization: TOKEN,
                    "Content-Type": "application/json",
                },
            });
            alert("Produto atualizado com sucesso!");
            setId("");
            setNome("");
            setPreco("");
        } catch (error) {
            console.error("Erro ao editar produto:", error);
            alert(`Erro: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h1>Editar Produto</h1>
            <div>
                <label>ID do Produto:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label>Preço:</label>
                <input
                    type="number"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
            </div>
            <button onClick={handleUpdate}>Editar</button>
        </div>
    );
};

export default EditarProduto;
