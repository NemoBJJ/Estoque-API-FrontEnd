import React, { useState } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3Mzg5NjExMjMsImV4cCI6MTczOTU2NTkyM30.hsIuLVK-Iw4g2NScB39zfH6V11d3R2Npw1p4mFZXa2I"; // Substitua pelo seu token válido

const RecursoProtegido = () => {
    const [mensagem, setMensagem] = useState("");

    const acessarRecurso = async () => {
        try {
            const response = await axios.get("http://3.217.55.187:8083/api/protected-resource", {
                headers: { Authorization: TOKEN },
            });
            setMensagem(response.data);
        } catch (err) {
            setMensagem("Erro ao acessar recurso protegido.");
        }
    };

    return (
        <div>
            <h2>Recurso Protegido</h2>
            <button onClick={acessarRecurso}>Acessar</button>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default RecursoProtegido;
