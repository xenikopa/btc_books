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
      { id: 'SHOW_ALL', title: 'All Books'},
      { id: 'RECENT', title: 'Most Recent'},
      { id: 'POPULAR', title: 'Most Popular'},
      { id: 'FREE', title: 'Free Books' }
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
