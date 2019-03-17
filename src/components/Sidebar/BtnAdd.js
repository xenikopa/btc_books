import React, { Component } from 'react';
import './Sidebar.sass';

class BtnAdd extends Component {
  render() {
    return (
      <div className='sidebar__btn_block'>
        <button 
          className='sidebar__btn' 
          type='button' 
          onClick={() => this.props.onClick()}
        >
          <i className='fa fa-plus'></i>
          Add a book
        </button>
      </div>
    );
  }
}

export default BtnAdd;
