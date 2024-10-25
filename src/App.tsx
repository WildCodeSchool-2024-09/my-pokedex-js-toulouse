import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      {index > 0 && (
        <button type="button" onClick={() => setIndex(index - 1)}>
          Précédent
        </button>
      )}
      {index < pokemonList.length - 1 && (
        <button type="button" onClick={() => setIndex(index + 1)}>
          Suivant
        </button>
      )}
    </div>
  );
}

export default App;
