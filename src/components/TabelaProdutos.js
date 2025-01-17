import React, { useEffect, useState } from "react";
import axios from "axios";
import FormularioProduto from "./FormularioProduto"; // Importando o Formulário

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A"; // Substitua pelo seu token válido

function TabelaProdutos() {
    const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
    const [produtoParaEditar, setProdutoParaEditar] = useState(null); // Produto a ser editado

    // Função para buscar produtos da API
    const buscarProdutos = async () => {
        try {
            const response = await axios.get("http://localhost:8083/api/produtos", {
                headers: {
                    Authorization: TOKEN,
                },
            });
            setProdutos(response.data); // Atualiza a lista de produtos
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    // Função para excluir produto
    const excluirProduto = async (id) => {
        try {
            await axios.delete(`http://localhost:8083/api/produtos/${id}`, {
                headers: {
                    Authorization: TOKEN,
                },
            });
            alert("Produto excluído com sucesso!");
            buscarProdutos(); // Atualiza a lista após exclusão
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            alert(`Erro ao excluir produto: ${error.response?.data?.message || error.message}`);
        }
    };

    // Limpar seleção de produto para edição
    const limparEdicao = () => setProdutoParaEditar(null);

    // Chama a função ao montar o componente
    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <FormularioProduto
                aoSalvar={buscarProdutos}
                produtoParaEditar={produtoParaEditar}
                limparEdicao={limparEdicao}
            />
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <button onClick={() => setProdutoParaEditar(produto)}>Editar</button>
                                <button onClick={() => excluirProduto(produto.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;

