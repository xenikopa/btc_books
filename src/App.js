import React, { Component } from 'react';
import './App.sass';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import VisibleBooksList from './containers/VisibleBooks';

class App extends Component {
  render() {
    return (
      <div className='main'> 
        <Sidebar />
        <div className='site'>
          <Header />
          <main>
            <VisibleBooksList />
          </main>
        </div>

      </div>
    );
  }
}

export default App;
