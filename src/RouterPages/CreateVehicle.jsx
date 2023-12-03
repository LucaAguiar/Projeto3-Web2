import React, { useState } from "react";
import axios from "axios";

const CreateVehicleForm = () => {
    const [formData, setFormData] = useState({
        id: null,
        marca: "",
        modelo: "",
        ano: "",
        categoria: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/vehicles", formData);

            setFormData({
                id: null,
                marca: "",
                modelo: "",
                ano: "",
                categoria: "",
            });

            alert("Veículo criado com sucesso!");
        } catch (error) {
            console.error("Erro ao criar veículo:", error);
            alert("Erro ao criar veículo. Tente novamente.");
        }
    };

    return (
        <div className="createVehicleContainer">
            <div className="createVehicleWrapper">
                <div className="titleWrapper">
                    <h2>Criar Veículo</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputWrapper">
                        <label>Id:</label>
                        <input
                            className="inputVehicle"
                            type="number"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div className="inputWrapper">
                        <label>Marca:</label>
                        <input
                            className="inputVehicle"
                            type="text"
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />
                    <div className="inputWrapper">
                        <label>Modelo:</label>
                        <input
                            className="inputVehicle"
                            type="text"
                            name="modelo"
                            value={formData.modelo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />
                    <div className="inputWrapper">
                        <label>Ano:</label>
                        <input
                            className="inputVehicle"
                            type="number"
                            name="ano"
                            value={formData.ano}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />

                    <div className="inputWrapper">
                        <label>Categoria:</label>
                        <input
                            className="inputVehicle"
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div className="buttonWrapper">
                        <button className="buttonCreateVehicle" type="submit">
                            Criar Veículo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateVehicleForm;
