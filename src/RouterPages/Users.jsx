import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://gorest.co.in/public/v2/users?page=1&per_page=10")
            .then((response) => {
                const fetchedUsers = response.data;
                console.log(fetchedUsers);
                setUsers(fetchedUsers);
            })
            .catch((error) => {
                console.error("Erro ao obter usuários:", error);
            });
    }, []);
    return (
        <div className="usersContainer">
            <div className="tableContainer">
                {users.length > 0 ? (
                    <table className="tableUsers">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Gênero</th>
                        </tr>
                        {users.map(({ id, name, email, gender }) => (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{gender}</td>
                            </tr>
                        ))}
                    </table>
                ) : (
                    <h2>Aguardando resposta da requisição...</h2>
                )}
            </div>
        </div>
    );
}
export default Users;
