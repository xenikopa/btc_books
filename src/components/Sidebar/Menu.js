import React, { Component } from 'react';
import './Sidebar.sass';
class Menu extends Component {
  render() {
    const menuItems = [
      { icon: 'fa-book', title: 'Now Reading'}, 
      { icon: 'fa-globe', title: 'Browse'}, 
      { icon: 'fa-cart-arrow-down ', title: 'Buy Books'}, 
      { icon: 'fa-star', title: 'Favorite Books'}, 
      { icon: 'fa-list', title: 'Wishlist'}
    ];
    return (
      <menu className='sidebar__menu'>
        {menuItems.map((item, key) => (
          
          <li 
            className={this.props.selected === item.title ? 'is-active' : ''}
            onClick={() => this.props.onChange(item.title)}
            key={key}
          >
            <i className={`fa ${item.icon}`} aria-hidden="true"></i>
            {item.title}
          </li>
          )
        )}
      </menu>
      
    );
  }
}

export default Menu;
