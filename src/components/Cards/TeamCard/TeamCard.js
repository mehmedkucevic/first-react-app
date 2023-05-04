import React, { useEffect, useState } from "react";
import "./TeamCard.css";
import { BASE_URL } from "../../../App";

function TeamCard({
  name,
  matches,
  points,
  deleteTeam,
  extended,
  setExtended,
  information,
  id,
}) {
  const [closed, setClosed] = useState(true);
  // console.log({ BASE_URL }); radi primera
  useEffect(() => {
    if (extended !== null && extended !== id) {
      setClosed(true);
    }
  }, [extended]);

  useEffect(() => {
    if (!closed) {
      setExtended(id);
    } else {
      setExtended(null);
    }
  }, [closed]);
  return (
    <div className="cardContainer2">
      <div className="card2">
        <p>{name}</p>
        <p>Broj odigranih meceva: {matches}</p>
        <p>Broj poena: {points}</p>
        <button onClick={deleteTeam}>Izbrisi tim</button>
        <button
          onClick={() => {
            setClosed(!closed);
          }}
        >
          {closed ? <span>Prikazi vise</span> : <span>Prikazi manje</span>}
        </button>
      </div>
      {!closed && (
        <div className="info">
          <p>{information}</p>
        </div>
      )}
    </div>
  );
}

export default TeamCard;