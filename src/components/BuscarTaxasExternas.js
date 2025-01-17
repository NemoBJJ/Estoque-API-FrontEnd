import React, { useState } from "react";
import axios from "axios";

const BuscarTaxasExternas = () => {
    const [taxas, setTaxas] = useState(null);
    const [erro, setErro] = useState(null);

    const buscarTaxas = async () => {
        try {
            const response = await axios.get("http://localhost:8083/api/currency-rates/external", {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A",
                },
            });
            setTaxas(response.data);
            setErro(null);
        } catch (err) {
            console.error("Erro ao buscar taxas externas:", err);
            setErro("Falha ao buscar taxas externas. Verifique o console para mais detalhes.");
        }
    };

    return (
        <div>
            <h2>Buscar Taxas Externas</h2>
            <button onClick={buscarTaxas}>Buscar Taxas</button>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {taxas && (
                <div>
                    <pre>{JSON.stringify(taxas, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default BuscarTaxasExternas;
