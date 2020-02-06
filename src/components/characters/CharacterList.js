import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/characterList';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const { characters } = useCharacters();


  const characterItem = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/characterDetail/${character.id}`} >
        <CharacterItem name={character.name} image={character.image} />
      </Link>
    </li>
  ));


  return (
    <ul>
      {characterItem}
    </ul>
  );
};

export default CharacterList;
