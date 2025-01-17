import React, { useState } from "react";
import axios from "axios";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzY4NjU5MDMsImV4cCI6MTczNzQ3MDcwM30.hZMse5-iyztoeM6JBpwb76yhlGnqtdYSIL-1ifCI3_A";

const RecursoProtegido = () => {
    const [mensagem, setMensagem] = useState("");

    const acessarRecurso = async () => {
        try {
            const response = await axios.get("http://localhost:8083/api/protected-resource", {
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
