import React from 'react';
import './BooksList.sass';
export class BookInfo extends React.Component {
  render() {
    const { title, author } = this.props.info;
    return (
      <div className='books__item-info'>
        <span className='books__item-title'>{title}</span>
        <span className='books__item-author'> by {author}</span>
      </div>
    )
  }
}