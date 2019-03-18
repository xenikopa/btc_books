import React, { Component } from 'react';
import '../components/Sidebar/Sidebar.sass';
import BtnAdd from '../components/Sidebar/BtnAdd';
import Menu from '../components/Menu/Menu';
import { openModal } from '../actions/modal';
import { connect } from 'react-redux'
import History from './History'
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onChangeMenuItem = this.onChangeMenuItem.bind(this);

    this.state = {
      selectedMenuItem: 'Browse',
    }
  }

  onChangeMenuItem(selectedMenuItem) {
    this.setState({
      selectedMenuItem,
    });
  }

  onClickAdd(){
    this.props.dispatch(openModal(null));
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
        <History />
      </aside>
    );
  }
}

export default connect()(Sidebar);
