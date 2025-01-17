import React, { useState } from "react";
import axios from "axios";

const CriarProduto = () => {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const TOKEN = "Bearer SEU_TOKEN_AQUI";

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const produto = { nome, preco: parseFloat(preco) };
            await axios.post("http://localhost:8083/api/produtos", produto, {
                headers: {
                    Authorization: TOKEN,
                    "Content-Type": "application/json",
                },
            });
            alert("Produto criado com sucesso!");
            setNome("");
            setPreco("");
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            alert(`Erro: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h1>Criar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default CriarProduto;
