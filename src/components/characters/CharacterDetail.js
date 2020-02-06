import React from 'react';

const CharacterDetail = () => {
  return (
    <>
      <section>
        <h1>{character.name}</h1>
        <image src={character.image}></image>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
      </section>
    </>
  );

};

export default CharacterDetail;
