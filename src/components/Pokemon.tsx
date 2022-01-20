import React from 'react';
import {pokemon} from "./pokemon-emotion-styles";

interface IPokemonProps {
  index: number;
  name: string;
}

const Pokemon = ({index, name}: IPokemonProps) => {
  return (
    <div className={pokemon}>
      {index} - {name}
    </div>
  )
}

export default Pokemon;