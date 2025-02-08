import React, { useState } from "react";
import axios from "axios";

const UltimasTaxas = () => {
    const [taxas, setTaxas] = useState(null);
    const [erro, setErro] = useState(null);

    const buscarTaxas = async () => {
        try {
            const response = await axios.get("http://3.217.55.187:8083/api/currency-rates/latest", {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I",
                },
            });
            setTaxas(response.data);
            setErro(null);
        } catch (err) {
            console.error("Erro ao buscar últimas taxas:", err);
            setErro("Falha ao buscar as taxas. Verifique o console para mais detalhes.");
        }
    };

    return (
        <div>
            <h2>Últimas Taxas</h2>
            <button onClick={buscarTaxas}>Buscar Taxas</button>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {taxas && (
                <div>
                    <p>Data: {taxas.date}</p>
                    <p>Taxas: {JSON.stringify(taxas.rates)}</p>
                </div>
            )}
        </div>
    );
};

export default UltimasTaxas;
