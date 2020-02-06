import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Rick And Morty Characters</h1>
    <nav>
      <ul>
        <li><Link to="/">Character List</Link></li>
      </ul>
    </nav>
  </header>

);

export default Header;
