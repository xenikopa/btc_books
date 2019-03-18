import React, { Component } from 'react';
import './Form.sass';
class GeneralForm extends Component {
  onChangeTitle(value) {
    const form = {
      ...this.props,
      title: value
    }
    this.props.onChangeValues(form);
  }
  onChangeAuthor(value) {
    const form = {
      ...this.props,
      author: value
    }
    this.props.onChangeValues(form);
  }
  render() {
    const title = this.props.title || '';
    const author = this.props.author || '';
    return (
      <React.Fragment>
        <div className='form-row'>
          <input 
            type='text'  
            placeholder='Enter Title' 
            defaultValue={title} 
            required
            onChange={(e) => this.onChangeTitle(e.target.value)}
          />
          <label>Title</label>
        </div>
        <div className='form-row'>
          <input 
            type='text' 
            placeholder='Enter Author' 
            defaultValue={author} 
            required
            onChange={(e) => this.onChangeAuthor(e.target.value)}
          />
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