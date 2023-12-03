import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateVehicle from "./RouterPages/CreateVehicle";
import Vehicles from "./RouterPages/Vehicles";
import Cep from "./RouterPages/Cep";
import Users from "./RouterPages/Users";
import Menu from "./Layout/Menu";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<CreateVehicle />}></Route>
                <Route path="/vehicles" element={<Vehicles />}></Route>
                <Route path="/cep" element={<Cep />}></Route>
                <Route path="/users" element={<Users />}></Route>
            </Routes>
        </Router>
    );
}
export default App;
