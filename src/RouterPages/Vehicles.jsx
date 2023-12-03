import { useState, useEffect } from "react";
import axios from "axios";

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/vehicles")
            .then((response) => {
                const fetchedVehicles = response.data;
                setVehicles(fetchedVehicles);
            })
            .catch((error) => {
                console.error("Erro ao obter os veículos:", error);
            });
    }, []);
    return (
        <div className="usersContainer">
            <div className="tableContainer">
                {vehicles.length > 0 ? (
                    <table className="tableUsers">
                        <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>Categoria</th>
                        </tr>
                        {vehicles.map(
                            ({ id, marca, modelo, ano, categoria }) => (
                                <tr>
                                    <td>{id}</td>
                                    <td>{marca}</td>
                                    <td>{modelo}</td>
                                    <td>{ano}</td>
                                    <td>{categoria}</td>
                                </tr>
                            )
                        )}
                    </table>
                ) : (
                    <h2>Aguardando resposta da requisição...</h2>
                )}
            </div>
        </div>
    );
}
export default Vehicles;
