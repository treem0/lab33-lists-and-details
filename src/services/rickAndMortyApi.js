export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(characters => characters.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        image: character.image
      };
    }));
    
};
  
export const getCharacterById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(({ id, name, image, status, species, gender }) => ({
      id,
      name,
      image,
      status,
      species,
      gender
    }));
      
};
    
