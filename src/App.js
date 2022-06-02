import { HashRouter, Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Pokedex from "./components/Pokedex";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserLogin from "./components/UserLogin";
import "./styles.css";

function App() {
  return (
    <HashRouter>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/pokemons" element={<Pokedex />} />
          <Route path="/pokemons/:id" element={<PokemonDetail />} /></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
