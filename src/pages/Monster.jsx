import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Component/Loading";
import "./Monster.css"

const Monster = () => {
  const { id } = useParams();
  const [monsterId, setMonsterId] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchMonsters() {
    const { data } = await axios.get(
      `https://botw-compendium.herokuapp.com/api/v2/entry/${id}`
    );
    
    setMonsterId(data.data)
    console.log(data.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchMonsters()
  }, []);

  return (
   <div>
        <>
      <div className="compendium">
        <Link to={"/compendium"} className="links" >
        <Button className="compendium__backButton">
            Back
        </Button>
        </Link>
        <div className="compendium__container">
        {loading ? <Loading /> :
        [monsterId]?.map((monsterId) => (
          <div key={monsterId.id} className="monsters monster__center">
            <figure className="monsters__imageWrapper">
                <img className="mosnters__image" src={monsterId.image} alt="" />
            </figure>
            <div className="monsters__title">
                {monsterId.name}
            </div>
            <h3 className="monster__description">
            {monsterId.description}
            </h3>
            <div className="monsters__title">
            {monsterId.drops === [] ? null : monsterId.drops?.length > 0 ? (
              <h3 className="monsters__drops">
                Drops: {monsterId.drops.join(", ")}
              </h3>
            ) : null}
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
   </div>
  );
};

export default Monster;
