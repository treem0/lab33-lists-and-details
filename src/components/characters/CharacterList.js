import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/characterList';

const CharacterList = () => {
  const { characters } = useCharacters();
  console.log('!!!!!!', characters);

  const characterItem = characters.map((character) => (
    <li key={character.name}>
      <CharacterItem name={character.name} image={character.image} />
    </li>
  ));


  return (
    <ul>
      {characterItem}
    </ul>
  );
};

export default CharacterList;
