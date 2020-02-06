import { useState, useEffect } from 'react';
import { getCharacters, getCharacterById } from '../services/rickAndMortyApi';


export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return { characters };
};

export const useCharacterId = (id) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacterById(id)
      .then(character => setCharacter(character));
  }, []);

  return { character };
};
