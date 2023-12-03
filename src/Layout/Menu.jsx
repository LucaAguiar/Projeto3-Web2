import { Link } from "react-router-dom";
function Menu() {
    return (
        <div className="menuContainer">
            <div className="menuWrapper">
                <Link to="/">
                    <button className="menuButton">Criar veículo</button>
                </Link>
                <Link to="/vehicles">
                    <button className="menuButton">Listar veículos</button>
                </Link>
                <Link to="/cep">
                    <button className="menuButton">
                        Buscar cidade por CEP
                    </button>
                </Link>
                <Link to="/users">
                    <button className="menuButton">Listar usuários</button>
                </Link>
            </div>
        </div>
    );
}
export default Menu;
