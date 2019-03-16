import React, { Component } from 'react';
import BooksFilter from './BooksFilter';
class AvalibleBooks extends Component {

  onChangeFilter(item){
    console.log(item);
  }
  render() {
    return (
      <React.Fragment>
        <BooksFilter 
          section='all' 
          onChange={(item) => this.onChangeFilter(item)}
        />
      </React.Fragment>
    );
  }
}

export default AvalibleBooks;
