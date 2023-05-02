import React from "react";
import "./TeamCard.css";
import { BASE_URL } from "../../../App";

function TeamCard({ name, matches, points, deleteTeam }) {
  // console.log({ BASE_URL }); radi primera
  return (
    <div className="cardContainer2">
      <div className="card2">
        <p>{name}</p>
        <p>Broj odigranih meceva: {matches}</p>
        <p>Broj poena: {points}</p>
        <button onClick={deleteTeam}>Izbrisi tim</button>
      </div>
    </div>
  );
}

export default TeamCard;