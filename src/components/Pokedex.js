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
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
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


  const [ page, setPage ] = useState(1);
  const pokemonNumbers = 5;
  const lastIndex = pokemonNumbers*page;
  const firstIndex = lastIndex-pokemonNumbers;
  const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil (pokemons?.length / pokemonNumbers);
  const numbers = [];
   for (let i = 1; i <= lastPage; i++) {
   numbers.push(i);
 }


  return (
    <div>
      <h1 className="rectangle2-red">.</h1>
      <img
        className="pokedeximg-2"
        src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
        alt=""
        width="200px"
      />
      <h1 className="rectangle2-black">.</h1>
      <img className="ball" src=".\images\pokeball.png" alt="" />
      <div className="welcome-2">
        <p>
          <b className="welcome2">Welcome {user},</b> here you can find your
          favorite pokemon.
        </p>
      </div>

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

      <select className="select" onChange={filterPokemons}>
        
        {types.map((type) => (
          <option value={type.url} key={type.name}>
            {type.name}{" "}
          </option>
        ))}
      </select>

      <div className="pokedex">
        {pokemonPaginated?.map((pokemon) => (
          <PokemonCard
            pokemonUrl={
              pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url
            }
            key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>

      <div>
        <button
          key={setPage}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        {numbers.map((number) => (
          <button key={number} onClick={() => setPage(number)}>
            {number}
          </button>
        ))}
        <button
          key={"nextButton"}
          onClick={() => setPage(page + 1)}
          disabled={pokemonPaginated.length < pokemonNumbers}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokedex;