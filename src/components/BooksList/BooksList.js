import React from 'react';
import booksImg from '../../storage/books.jpg';
import './BooksList.sass';
import { BookRating } from './BookRating';
import { BookInfo } from './BookInfo';
export class BooksList extends React.Component {
  render() {
    const { books } = this.props;
    return (
      books.length > 0 
      ? (
        <div className='books__block'>
          {books.map(book =>
            <div
              key={book.id}
              className='books__item'
              onClick={() => this.props.onBookClick(book)}
            >
              <img src={booksImg} alt={book.title}/>
              <BookInfo info={book} />
              <BookRating rating={book.rating} />
            </div>
          )}
        </div>
      )
      : <h3> Empty Result</h3>
    )
  }
}