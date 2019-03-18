import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Modal.sass';
import Menu from '../Menu/Menu';
import GeneralForm from './GeneralForm';
import GenreForm from './GenreForm';
import { isNull } from 'util';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: 'General',
      form: {
        id: 0, title: null, author: null
      },
      formError: null,
    }
  }

  onChangeMenuItem(selectedMenuItem) {
    this.setState({selectedMenuItem});
  }

  updateForm(form){
    this.setState({
      form: {
        ...this.state.form,
        ...form
      }
    })
  }

  onClose(){
    this.setState({
      formError: null
    })
    this.props.closeModal();
  }

  onSaveForm(){
    const formValues = (isNull(this.props.form)) 
      ? this.getNewBooksProps()
      : this.getBookProps(this.props.form);
  
    if (formValues.title.length > 0 &&  formValues.author.length > 0) {
      this.props.closeAndSave(formValues);
      this.setState({
        formError: null
      })
    } else {
      this.setState({
        formError: 'Fill in required fields'
      })
    }
  }

  getBookProps(form) {
    const stateForm = this.state.form;
    return {
      ...form,
      title: isNull(stateForm.title) ? form.title :  stateForm.title,
      author: isNull(stateForm.author) ? form.author :  stateForm.author,
      date: new Date()
    }
  }

  getNewBooksProps() {
    const stateForm = this.state.form;
    return {
      id: 0,
      title: stateForm.title || '',
      author: stateForm.author || '',
      rating: 0,
      date: new Date()
    }
  }

  render() {
    const menuItems = [
      { icon: 'fa-align-center', title: 'General'}, 
      { icon: 'fa-tags', title: 'Genre'}, 
      { icon: 'fa-file-image-o', title: 'Poster'}, 
      { icon: 'fa-info-circle', title: 'Info'}
    ];

    const { form, isShow } = this.props;
    return (
      <ReactModal
        isOpen={isShow}
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className='modal__header'>
          <h2>Add New Books</h2>
          <button type='button' className="modal__close fa fa-times" onClick={() => this.onClose()}></button>
        </div>
        <div className='modal__body'>
          <aside>
            <Menu
              selected={this.state.selectedMenuItem}
              onChange={item => {this.onChangeMenuItem(item)}}
              items={menuItems}
              menuClass='modal__body-menu'
            />
          </aside>
          <form>

            { this.state.formError && <span className="fa fa-exclamation-triangle form-error" >{this.state.formError} </span>}
            {(() => {
              switch(this.state.selectedMenuItem) {
                case 'General':
                  return <GeneralForm 
                    {...form}
                    onChangeValues={(updated) => this.updateForm(updated)}
                  />
                case 'Genre':
                  return  <GenreForm />;
                default:
                  return <div>Tab is in developing</div>;
              }
            })()}
          </form>
        </div>
        <div className='modal__footer'>
          <button type='button' className='btn primary' onClick={() => this.onSaveForm()}>Add book</button>
          <button type='button' className='btn secondary' onClick={() => this.onClose()}>Cancel</button>
        </div>
     </ReactModal>
    );
  }
}

export default Modal;