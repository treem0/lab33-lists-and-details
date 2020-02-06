import React from 'react';
import { useCharacterId } from '../../hooks/characterList';

const CharacterDetail = ({ match }) => {
  const { character } = useCharacterId(match.params.id);
 
  return (
    <>
      <section>
        <h1>{character.name}</h1>
        <img src={character.image}></img>
        <p>STATUS: {character.status}</p>
        <p>SPECIES: {character.species}</p>
        <p>GENDER: {character.gender}</p>
      </section>
    </>
  );

};

export default CharacterDetail;
