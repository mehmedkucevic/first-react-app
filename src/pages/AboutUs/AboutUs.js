import React from "react";
import PersonCard from "../../components/Card/PersonCard/PersonCard.js"
import persons from "../AboutUs"
export default function AboutUs() {
  return<> 
  <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 250px)",
                justifyContent: "center",
                gridAutoRows: "minmax(420px, auto)",
                gridGap: "40px",
              }}
            >
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
  </>
}