import React, { useState } from "react";
import "./Teams.css";
import TeamCard from "../../components/Cards/TeamCard/TeamCard";
import teamsJSON from "../../common/teams.json";
import { Link, useNavigate } from "react-router-dom";

export default function Teams() {
  const navigation = useNavigate();
  const [teams, setTeams] = useState(teamsJSON);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  return (
    <div>
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          name={team.name}
          matches={team.matches}
          points={team.points}
          deleteTeam={() => deleteTeam(team.id)}
        />
      ))}
      <Link to={"/quotes"}>Vidi citate</Link>
      <button onClick={() => navigation("/hotels")}>Hotels</button>
    </div>
  );
}