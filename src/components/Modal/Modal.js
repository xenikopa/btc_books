import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Modal.sass';
import Menu from '../Menu/Menu';
import GeneralForm from './GeneralForm';
import GenreForm from './GenreForm';
ReactModal.setAppElement('#root');
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: 'General'
    }
  }

  onChangeMenuItem(selectedMenuItem) {
    this.setState({selectedMenuItem});
  }
  
  render() {
    const menuItems = [
      { icon: 'fa-align-center', title: 'General'}, 
      { icon: 'fa-tags', title: 'Genre'}, 
      { icon: 'fa-file-image-o', title: 'Poster'}, 
      { icon: 'fa-info-circle', title: 'Info'}
    ];
    return (
      <ReactModal
        isOpen={this.props.isShow}
        contentLabel="Minimal Modal Example"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className='modal__header'>
          <h2>Add New Books</h2>
          <button type='button' className="modal__close fa fa-times" onClick={() => this.props.onClose()}></button>
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
            {(() => {
              switch(this.state.selectedMenuItem) {
                case 'General':
                  return <GeneralForm />
                case 'Genre':
                  return  <GenreForm />;
                default:
                  return <div>Tab is in developing</div>;
              }
            })()}
          </form>
        </div>
        <div className='modal__footer'>
          <button type='button' className='btn primary'>Add book</button>
          <button type='button' className='btn secondary' onClick={this.handleCloseModal}>Cancel</button>
        </div>
     </ReactModal>
    );
  }
}

export default Modal;