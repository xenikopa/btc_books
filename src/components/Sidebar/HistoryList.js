import React, { Component } from 'react';
import './Sidebar.sass';

class HistoryList extends Component {
  render() {
    const history = [
      { title: 'Figth Club', author: 'Chuck Palahniuk', where: 'Must Read Titles' },
      { title: 'The Trial', author: 'Franz Kafka', where: 'Must Read Titles' }
    ]
    return (
      <div className='sidebar__history'>
        {history.map(item => (
          <div className='sidebar__history_item'>
            <i className='fa fa-clock-o'></i>
            <div>
              <p> You added <a href=''>{item.title}</a> by <a href=''>{item.author}</a> to your <a href=''>{item.where}</a>.</p>
              <span>24 minutes ago</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default HistoryList;
