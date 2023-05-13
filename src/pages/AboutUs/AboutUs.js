import React, { useEffect, useState } from "react";
import PersonCard from "../../components/Cards/PersonCard/PersonCard";
import persons from "../../common/persons.json";
import "./AboutUs.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";

export default function AboutUs() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  async function getUsers() {
    try {
      const users = await axios.get(`${BASE_URL}/users`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const usersData = await users.data;
      // setUsers(users)
      console.log(usersData);
    } catch (err) {
      console.log(err.response.data.err);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
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