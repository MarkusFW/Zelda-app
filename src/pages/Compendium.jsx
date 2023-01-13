import React, { useEffect, useState } from "react";
import "./Compendium.css";
import axios from "axios";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Component/Loading";

const Compendium = () => {
  //HOOKS
  const [monsters, setMonsters] = useState([]);
  let navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(true);

  //FUNCITONS
  async function fetchAllCompendium() {
    const { data } = await axios.get(
      `https://botw-compendium.herokuapp.com/api/v2/category/monsters`
    );
    console.log(data.data);
    setMonsters(data.data);
    setLoading(false)
  }

  async function fetchSearchName() {
    const { data } = await axios.get(
      `https://botw-compendium.herokuapp.com/api/v2/entry/${searchName}`
    );
    console.log(data.data);
    setMonsters([data.data]);
  }

  

  //USEEFFECTS
  useEffect(() => {
    setTimeout(() => {
      fetchAllCompendium();
    }, 1000);
  }, []);

  return (
    <>
      <div className="compendium">
        <Link to={"/"} className="links">
          <Button className="compendium__backButton">Back</Button>
        </Link>
        <div>
          <div className="search">
            <div className="search__input">
              <input
                type="text"
                placeholder="Search..."
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
                onKeyPress={(event) => event.key === "Enter" && fetchSearchName()}
              />
              <SearchIcon className="search__inputIcon" />
            </div>
          </div>
        </div>
        {loading ? <Loading /> :
        <div className="compendium__container"> 
          {monsters?.slice(0, 15).map((monsters) => (
            <div
              key={monsters.id}
              onClick={() => navigate(`${monsters.id}`)}
              className="monsters"
            >
              <figure className="monsters__imageWrapper">
                <img className="mosnters__image" src={monsters.image} alt="" />
              </figure>
              <div className="monsters__title">{monsters.name}</div>
            </div>
          ))}
        </div>}
      </div>
    </>
  );
};

export default Compendium;
