import React, { Component } from 'react';
import '../components/BooksList/BooksList.sass';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import FilterChecked from '../components/Header/Filter/FilterChecked';
import SearchInput from '../components/Header/Filter/SearchInput';
class BooksFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      section: this.props.getInitFilter(),
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
    this.props.dispatch(setVisibilityFilter(filter));
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

const mapStateToProps = (state) => {
  return {
    getInitFilter: () => {
      return state.filter.section
    }
  }
}

export default connect(
  mapStateToProps
)(BooksFilter)
