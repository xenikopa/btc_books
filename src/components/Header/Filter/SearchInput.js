import React, { Component } from 'react';
import './BooksFilter.sass';
class SearchInput extends Component {
  onInputValue(value) {
    this.props.onChangeValue(value);
  }

  render() {
    return (
      <div className='filter__search'>
        <span className="fa fa-search"></span>
        <input 
          type='search' 
          onInput={(e) => this.onInputValue(e)}
          placeholder='Enter Keywords'
        />
      </div>
    );
  }
}

export default SearchInput;
