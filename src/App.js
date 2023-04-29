import React, { useEffect, useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import hotels from "./common/hotels.json";
import teamsJSON from "./common/teams.json";
import HotelCard from "./components/Cards/HotelCard/HotelCard";
import Form from "./components/Form/Form";
import TeamCard from "./components/Cards/TeamCard/TeamCard";
import QuoteCard from "./components/Cards/QuoteCard/QuoteCard";
import Pagination from "./components/Pagination/Pagination";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";

// const persons = [
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/89378479?v=4",
//     fullName: "Dzenan Kosuta",
//     description: "Dzenan is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/dzenankosuta?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905831?v=4",
//     fullName: "Alen Muslic",
//     description: "Alen is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/alenmuslic?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg",
//     fullName: "Aladin Zecic",
//     description: "Aladin is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/aladinzecic?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905979?v=4",
//     fullName: "Haris Muslic",
//     description: "Haris is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/harismuslic04?tab=repositories",
//   },
// ];

const poruke = [
  "Danas je subota",
  "U subotu je lepo vreme",
  "Subota je dan za odmor",
  "Subota je dan za kupovinu",
  "Subota je dan za druzenje",
  "Subota je dan za kafu",
];

export const BASE_URL = "https://api.quotable.io";

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(poruke);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;

  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };

  const [teams, setTeams] = useState(teamsJSON);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const getQuotes = async () => {
    const getQuotes = await fetch(`${BASE_URL}/quotes?page=${page}`);
    const data = await getQuotes.json();
    const results = data.results;

    setQuotes(results);
    // console.log(data);
    console.log(results);
  };

  console.log(quotes[0]?.content);

  useEffect(() => {
    getQuotes();
  }, [page]);

  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      {/* <div className="App"> */}
      {/* <Navbar><p>Samo za primer</p></Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} /> */}
      {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 250px)",
            justifyContent: "center",
            gridAutoRows: "minmax(420px, auto)",
            gridGap: "40px",
          }}
        > */}
      {/* <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/89378479?v=4"}
            fullName={"Dzenan Kosuta"}
            location={"Novi pazar, Serbia"}
            description={
              "Dženan is a mathematician, and he work's in center NIT as a Webdeveloper"
            }
            goToRepositories={
              "https://github.com/dzenankosuta?tab=repositories"
            }
          />
          <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/111905831?v=4"}
            fullName={"Alen Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Alen is rising Web developer..."}
            goToRepositories={"https://github.com/alenmuslic?tab=repositories"}
          />
          <PersonCard
            imageURL={
              "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg"
            }
            fullName={"Aladin Zecic"}
            location={"Novi pazar, Serbia"}
            description={"Aladin is rising Web developer..."}
            goToRepositories={"https://github.com/aladinzecic?tab=repositories"}
          />
          <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/111905979?v=4"}
            fullName={"Haris Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Haris is rising Web developer..."}
            goToRepositories={
              "https://github.com/harismuslic04?tab=repositories"
            }
          /> */}
      {/* {persons.map((person) => (
            <PersonCard
              key={person.id}
              imageURL={person.imageURL}
              fullName={person.fullName}
              location={person.location}
              description={person.description}
              goToRepositories={person.goToRepositories}
            />
          ))} */}
      {/* <div>
            <button style={{ width: "40px" }} onClick={decreaseCount}>
              -
            </button>
            <p>{count}</p>
            <button
              style={{ width: "40px" }}
              onClick={() => {
                console.log("povecanje");
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div> */}
      {/* </div> */}
      {/* <div className="hotels">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              imageURL={hotel.imageURL}
              name={hotel.name}
              stars={hotel.stars}
              description={hotel.description}
              rating={hotel.rating}
              reviews={hotel.reviews}
            />
          ))}
        </div> */}
      {/* <Form /> */}
      {/* <div
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              reverseArr();
              console.log("okrenuo se niz");
            }}
          >
            Promeni raspored poruka
          </button>
          {arr.map((poruka) => (
            <p>{poruka}</p>
          ))}
        </div> */}
      {/* {teams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            matches={team.matches}
            points={team.points}
            deleteTeam={() => deleteTeam(team.id)}
          />
        ))} */}
      {/* <div className="quote-container">
          {quotes.map((quote) => (
            <QuoteCard author={quote.author} content={quote.content} />
          ))}
        </div> */}
      {/* <Pagination currentPage={page} handlePageClick={handlePageClick} /> */}
      {/* </div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/hotels" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
