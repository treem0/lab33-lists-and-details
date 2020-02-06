import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';


export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return { characters };
};

export const useCharacterId = (id) => {
    
};
