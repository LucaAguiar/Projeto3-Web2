import { useState } from "react";
import axios from "axios";

function cepRequest() {
    const [cep, setCep] = useState();
    const [local, setLocal] = useState("Digite o CEP");
    const [loading, setLoading] = useState(false);

    const requestCep = () => {
        setLoading(true);
        axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                setLocal(response.data.localidade);
                setLoading(false);
            })
            .catch((error) => {
                setLocal("CEP não encontrado ou incorreto.");
                console.error("Erro ao obter cep:", error);
                setLoading(false);
            });
    };
    return (
        <div className="cepRequestContainer">
            <div className="inputCepContainer">
                <div className="inputCepWrapper">
                    <input
                        className="inputCep"
                        type="text"
                        onChange={(e) => setCep(e.target.value)}
                    />
                    <br />
                    <button className="buttonCep" onClick={requestCep}>
                        Pesquisar
                    </button>
                </div>
            </div>
            {loading ? (
                <div className="localContainer">
                    <h2>Carregando nome da cidade...</h2>
                </div>
            ) : (
                <div className="localContainer">
                    <h2>Nome da cidade: {local}</h2>
                </div>
            )}
        </div>
    );
}
export default cepRequest;
