import React, { Component } from 'react';
import './Form.sass';
class GeneralForm extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='form-row'>
          <input type='text'  placeholder='Enter Title' required/>
          <label>Title</label>
        </div>
        <div className='form-row'>
          <input type='text' placeholder='Enter Author' required/>
          <label>Author</label>
        </div>
        <div className='form-row'>
          <input type='text' placeholder='Enter Publisher' required/>
          <label>Publisher</label>
        </div>
        <div className='form-group'>
          <div className='form-row'>
            <input type='text' placeholder='Enter Paperback'/>
            <label>Paperback</label>
          </div>
          <div className='form-row'>
            <input type='text' placeholder='Enter ISBN' required/>
            <label>ISBN</label>
          </div>
        </div>
        <div className='form-row'>
          <input type='text' placeholder='Enter Summary'/>
          <label>Summary</label>
        </div>
      </React.Fragment>
    );
  }
}

export default GeneralForm;