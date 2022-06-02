import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
// import images from "./images/pokeball.png";

const UserLogin = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getName = () => {
    dispatch(changeUser(userName));
    navigate("/pokemons");
  };

  return (
    <form>
      <div className="login">
        <img
          className="pokedeximg"
          src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
          alt=""
          width="400px"
        />
        <h1 className="welcome1">¡Hello Trainer!</h1>
        <h4 className="begin">Write your name to start</h4>
        <input
          className="login-input"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder=" Your name..."
        />
        <button className="login-button" onClick={getName}>
          Begin
        </button>
        <footer>
          <h1 className="rectangle-red"></h1>
          {/* <img src={images} alt="" width="200px" /> */}
          <h1 className="rectangle-black"></h1>
        </footer>
      </div>
    </form>
  );
};

export default UserLogin;
