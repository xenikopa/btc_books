import React, { Component } from 'react';
import './BooksFilter.sass';
class FilterChecked extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected: this.props.selected
    }
  }

  onClickFilter(selected){
    this.setState({selected});
    this.props.onChangeSection(selected);
  }
  
  render() {
    const filterValues = [
      { id: 'all', title: 'All Books'},
      { id: 'recent', title: 'Most Recent'},
      { id: 'popular', title: 'Most Popular'},
      { id: 'free', title: 'Free Books' }
    ];
    return (
      <div>
        {filterValues.map(value => (
          <React.Fragment key={value.id}>
            <input 
              type='radio' 
              id={value.id} 
              value={value.id} 
              name='book-filter' 
              checked={value.id === this.state.selected}
              onChange={() => this.onClickFilter(value.id)}
            />
            <label htmlFor={value.id}>{value.title}</label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default FilterChecked;
