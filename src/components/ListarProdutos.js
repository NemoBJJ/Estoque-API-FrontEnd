import React, { useEffect, useState } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I"; // Substitua pelo seu token válido

function ListarProdutos() {
    const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos

    // Função para buscar produtos da API
    const buscarProdutos = async () => {
        try {
            const response = await axios.get("http://3.217.55.187:8083/api/produtos", {
                headers: {
                    Authorization: TOKEN,
                },
            });
            setProdutos(response.data); // Atualiza a lista de produtos
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    // Chama a função ao montar o componente
    useEffect(() => {
        buscarProdutos();
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
}

export default ListarProdutos;
