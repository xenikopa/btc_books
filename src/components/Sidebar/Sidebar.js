import React, { Component } from 'react';
import './Sidebar.sass';
import Menu from './Menu';
import BtnAdd from './BtnAdd';
import HistoryList from './HistoryList';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenuItem: 'Browse'
    }
  }

  onChangeMenuItem(selectedMenuItem) {
    this.setState({selectedMenuItem});
  }

  onClickAdd(){
    console.log('add');
  }

  render() {
    return (
      <aside className='sidebar'>
        <BtnAdd onClick={this.onClickAdd.bind(this)}/>
        <Menu 
          selected={this.state.selectedMenuItem} 
          onChange={item => this.onChangeMenuItem(item)}
        />
        <HistoryList />
      </aside>
    );
  }
}

export default Sidebar;
