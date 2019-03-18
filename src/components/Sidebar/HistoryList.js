import React, { Component } from 'react';
import './Sidebar.sass';


class HistoryList extends Component {
  render() {
    const { historyList } = this.props;
    return (
      <div className='sidebar__history'>
        {historyList.map((item, key) => (
          <div key={key} className='sidebar__history_item'>
            <i className='fa fa-clock-o'></i>
            <div>
              <p> You added <a href='/'>{item.title}</a> by <a href='/'>{item.author}</a> to your <a href='/'> Must Read Titles</a>.</p>
              <span>24 minutes ago</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default HistoryList;
