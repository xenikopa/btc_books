import React, { Component } from 'react';
class Menu extends Component {
  render() {
    const { items, menuClass } = this.props;
    return (
      <menu className={menuClass}>
        {items.map((item, key) => (
          
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
