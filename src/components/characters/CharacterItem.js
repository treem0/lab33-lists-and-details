import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => {
  return (
    <> 
      <h1>{name}</h1>
      <img src={image}></img>
    </>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
