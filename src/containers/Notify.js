import React, { Component } from 'react';
import ReactModal from 'react-modal';
import '../components/Modal/Modal.sass';
import { connect } from 'react-redux'
import { closeNotify } from '../actions/notify';
class Notify extends Component {
  onClose() {
    this.props.onClose();
  }

  render() {
    const { isShow, bookTitle } = this.props;
    return (
      <ReactModal
        isOpen={isShow}
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className='modal__notify'>
          The book {bookTitle} successfully added
        </div>
        <div className='modal__footer'>
          <button type='button' className='btn primary' onClick={() => this.onClose()}>Close</button>
        </div>
      </ReactModal>
    );
  }
}
const mapStateToProps = ({ notify }) => {
  return notify;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(closeNotify())
    },
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Notify)