import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-beers text-center bg-primary">
        <Link to="/">
          <img src={'../../home.png'} />
        </Link>
      </div>
    );
  }
}

export default Navbar;
