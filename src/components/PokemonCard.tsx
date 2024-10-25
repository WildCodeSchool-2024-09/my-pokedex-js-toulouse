interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
    id: number;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  if (pokemon.id === 4) {
    alert("Pika Pikachu!!!");
  }

  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </>
  );
}

export default PokemonCard;
