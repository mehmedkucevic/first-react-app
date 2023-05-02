import React from "react";
import PersonCard from "../../components/Cards/PersonCard/PersonCard";
import persons from "../../common/persons.json";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      {persons.map((person) => (
        <PersonCard
          key={person.id}
          imageURL={person.imageURL}
          fullName={person.fullName}
          location={person.location}
          description={person.description}
          goToRepositories={person.goToRepositories}
        />
      ))}
    </div>
  );
}