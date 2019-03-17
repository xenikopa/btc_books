import React, { Component } from 'react';
import './Header.sass'
import BooksFilter from '../../containers/BooksFilter';
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Browse Avalible Books</h1>
        <BooksFilter />
      </header>
    );
  }
}

export default Header;
