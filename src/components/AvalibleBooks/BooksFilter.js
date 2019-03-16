import React, { Component } from 'react';
import './BooksFilter.sass';
import FilterChecked from './FilterChecked';
import SearchInput from './SearchInput';
class BooksFilter extends Component {
  constructor(props){
    super(props);

    this.state = {
      section: this.props.section,
      input: ''
    }
  }
  onChangeSearchValue(input) {
    this.setState({input});
    this.publishFilter(this.state.section, input);
  }

  onChangeSelectedSection(section){
    this.setState({section});
    this.publishFilter(section, this.state.input);
  }

  publishFilter(section, input){
    const filter = {
      section, input
    }
    this.props.onChange(filter);
  }
  
  render() {
    return (
      <div className='filter__container'>
        <FilterChecked 
          selected={this.state.section}
          onChangeSection={(item) => this.onChangeSelectedSection(item)}
        />
        <SearchInput 
          onChangeValue={(value) => this.onChangeSearchValue(value.target.value)} 
        />
      </div>
    );
  }
}

export default BooksFilter;
