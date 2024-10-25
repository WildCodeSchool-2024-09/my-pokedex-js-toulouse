import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./NavBar";
import "./App.css";

const pokemonList = [
  {
    id: 1,
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2,
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 3,
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 4,
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 5,
    name: "mew",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[index]} />
      <NavBar pokemonList={pokemonList} setIndex={setIndex} />
    </div>
  );
}

export default App;
