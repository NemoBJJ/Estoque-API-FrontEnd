import React, { useEffect, useState } from "react";
import axios from "axios";

const ProdutosComMoeda = () => {
    const [produtos, setProdutos] = useState([]);
    const [moeda, setMoeda] = useState("USD");
    const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I";

    const buscarProdutosComMoeda = async () => {
        try {
            const response = await axios.get(`http://localhost:8083/api/produtos/com-moeda?currency=${moeda}`, {
                headers: {
                    Authorization: TOKEN,
                },
            });
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos com moeda:", error);
        }
    };

    useEffect(() => {
        buscarProdutosComMoeda();
    }, [moeda]);

    return (
        <div>
            <h1>Produtos com Conversão de Moeda</h1>
            <div>
                <label>Moeda:</label>
                <input
                    type="text"
                    value={moeda}
                    onChange={(e) => setMoeda(e.target.value)}
                />
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Moeda</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.moeda}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProdutosComMoeda;
