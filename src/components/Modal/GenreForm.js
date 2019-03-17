import React, { Component } from 'react';
import './Form.sass';
class GenreForm extends Component {
  render() {
    return (
      <div className='form-row'>
        <input type='text'  placeholder='Enter Genre' required/>
        <label>Genre</label>
      </div>
    );
  }
}

export default GenreForm;