import React, { useState, useEffect } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I"; // Substitua pelo seu token válido

function FormularioProduto({ aoSalvar, produtoParaEditar, limparEdicao }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    // Atualiza os campos do formulário quando o produto para editar mudar
    useEffect(() => {
        if (produtoParaEditar) {
            setNome(produtoParaEditar.nome || "");
            setPreco(produtoParaEditar.preco || "");
        }
    }, [produtoParaEditar]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const produto = { nome, preco: parseFloat(preco) }; // Certifique-se de enviar o preço como número

            if (produtoParaEditar) {
                // Editar produto existente
                await axios.put(
                    `http://3.217.55.187:8083/api/produtos/${produtoParaEditar.id}`,
                    produto,
                    {
                        headers: {
                            Authorization: TOKEN,
                            "Content-Type": "application/json",
                        },
                    }
                );
                alert("Produto editado com sucesso!");
            } else {
                // Adicionar novo produto
                await axios.post("http://3.217.55.187:8083/api/produtos", produto, {
                    headers: {
                        Authorization: TOKEN,
                        "Content-Type": "application/json",
                    },
                });
                alert("Produto adicionado com sucesso!");
            }

            // Reseta os campos do formulário
            setNome("");
            setPreco("");

            // Atualiza a lista de produtos
            if (aoSalvar) aoSalvar();

            // Limpa a edição após salvar
            if (limparEdicao) limparEdicao();
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
            alert(`Erro ao salvar produto: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="preco">Preço:</label>
                <input
                    id="preco"
                    type="number"
                    step="0.01"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{produtoParaEditar ? "Salvar Alterações" : "Salvar"}</button>
            {produtoParaEditar && (
                <button type="button" onClick={limparEdicao}>
                    Cancelar
                </button>
            )}
        </form>
    );
}

export default FormularioProduto;
