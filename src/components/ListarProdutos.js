import React, { useEffect, useState } from "react";
import axios from "axios";

const ListarProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const TOKEN = "Bearer SEU_TOKEN_AQUI";

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get("http://localhost:8083/api/produtos", {
                    headers: {
                        Authorization: TOKEN,
                    },
                });
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao listar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarProdutos;
