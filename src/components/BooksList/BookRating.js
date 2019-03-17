import React from 'react';
import './BooksList.sass';
export class BookRating extends React.Component {
  render() {
    const { rating } = this.props;
    const checkedStars = Array(rating).fill((<span class="fa fa-star"></span>));
    const emptyStars = rating === 5 
      ? [] 
      : Array(5 - rating).fill((<span class="fa fa-star-o"></span>))

    return (
      <div>{[ ...checkedStars, ...emptyStars]}</div>
    )
  }
}