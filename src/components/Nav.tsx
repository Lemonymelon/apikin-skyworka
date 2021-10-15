import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">HOME</Link>
    <Link to="/characters">CHARACTERS</Link>
    <Link to="/films">FILMS</Link>

  </div>
);

export default Nav;
