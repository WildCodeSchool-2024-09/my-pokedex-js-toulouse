interface NavBarProps {
  index: number;
  setIndex: (index: number) => void;
  pokemonList: {
    name: string;
    imgSrc?: string;
  }[];
}

function NavBar({ index, setIndex, pokemonList }: NavBarProps) {
  return (
    <>
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
    </>
  );
}

export default NavBar;
