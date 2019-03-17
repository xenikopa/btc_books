import React from 'react';
import './BooksList.sass';
export class BookRating extends React.Component {
  getRandomKey(index) {
    return Math.random(index) * 10
  }
  render() {
    const { rating } = this.props;
    const checkedStars = Array.from(Array(rating), (value, i) => <span key={this.getRandomKey(i)} className="fa fa-star"></span>)
    const emptyStars = rating === 5 
      ? [] 
      : Array.from(Array(5 - rating), (value, i) => <span key={this.getRandomKey(i)} className="fa fa-star-o"></span>)

    return (
      <div>{[ ...checkedStars, ...emptyStars]}</div>
    )
  }
}