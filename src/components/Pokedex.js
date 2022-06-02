import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const user = useSelector((state) => state.user);

  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((res) => setPokemons(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  const search = () => {
    navigate(`/pokemons/${pokemonSearch}`);
  };

  const filterPokemons = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };

  return (
    <div>
      <h1 className="rectangle2-red"></h1>
      <img
        className="pokedeximg-2"
        src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
        alt=""
        width="200px"
      />
      <h1 className="rectangle2-black"></h1>
      <img className="ball" src=".\images\pokeball.png" alt="" />
      <div className="welcome-2">
        <p>
          <b className="welcome2">Welcome {user},</b> here you can find your
          favorite pokemon.
        </p>
      </div>

      <select onChange={filterPokemons}>
        <option>Todos los Tipos</option>
        {types.map((type) => (
          <option value={type.url} key={type.name}>
            {type.name}{" "}
          </option>
        ))}
      </select>
      <form>
        <div className="search-box">
          <input
            className="inputpok"
            type="text"
            value={pokemonSearch}
            onChange={(e) => setPokemonSearch(e.target.value)}
            placeholder="Look for a pokemon..."
          />
          <button className="btn btn-primary" onClick={search}>
            Search
          </button>
        </div>
      </form>
      <div className="pokemoncard">
        {pokemons.map((pokemon) => (
          <PokemonCard
            pokemonUrl={
              pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url
            }
            key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
