interface NavBarProps {
  setIndex: (index: number) => void;
  pokemonList: {
    name: string;
    imgSrc?: string;
    id: number;
  }[];
}

function NavBar({ setIndex, pokemonList }: NavBarProps) {
  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <button
            key={pokemon.id}
            type="button"
            onClick={() => setIndex(index)}
          >
            {pokemon.name}
          </button>
        );
      })}
    </>
  );
}

export default NavBar;
