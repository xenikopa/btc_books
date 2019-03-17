import React, { Component } from 'react';
import './Sidebar.sass';
import BtnAdd from './BtnAdd';
import HistoryList from './HistoryList';
import Modal from '../Modal/Modal';
import Menu from '../Menu/Menu';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onChangeMenuItem = this.onChangeMenuItem.bind(this);

    this.state = {
      selectedMenuItem: 'Browse',
      isShowModal: false
    }
  }

  onChangeMenuItem(selectedMenuItem) {
    this.setState({
      selectedMenuItem,
    });
  }

  onClickAdd(){
    this.setState({isShowModal: true});
  }

  onCloseModal(){
    this.setState({isShowModal: false});
  }

  render() {
    const menuItems = [
      { icon: 'fa-book', title: 'Now Reading'}, 
      { icon: 'fa-globe', title: 'Browse'}, 
      { icon: 'fa-cart-arrow-down ', title: 'Buy Books'}, 
      { icon: 'fa-star', title: 'Favorite Books'}, 
      { icon: 'fa-list', title: 'Wishlist'}
    ];
    return (
      <aside className='sidebar'>
        <BtnAdd onClick={this.onClickAdd.bind(this)}/>
        <Menu
          selected={this.state.selectedMenuItem} 
          onChange={item => this.onChangeMenuItem(item)}
          items={menuItems}
          menuClass='sidebar__menu'
        />
        <HistoryList />
        <Modal 
          isShow={this.state.isShowModal} 
          onClose={() => this.onCloseModal()}
        />
      </aside>
    );
  }
}

export default Sidebar;
