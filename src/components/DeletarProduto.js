import React, { useState } from "react";
import axios from "axios";

const DeletarProduto = () => {
    const [id, setId] = useState("");
    const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A";

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8083/api/produtos/${id}`, {
                headers: {
                    Authorization: TOKEN,
                },
            });
            alert("Produto deletado com sucesso!");
            setId("");
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            alert(`Erro: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h1>Deletar Produto</h1>
            <div>
                <label>ID do Produto:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={handleDelete}>Deletar</button>
            </div>
        </div>
    );
};

export default DeletarProduto;
