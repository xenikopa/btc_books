import React, { Component } from 'react';
import './App.sass';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AvalibleBooks from './components/AvalibleBooks/AvalibleBooks';

class App extends Component {
  render() {
    return (
      <div className='main'> 
        <Sidebar />
        <div className='site'>
          <Header />
          <main>
            <AvalibleBooks />
          </main>
        </div>

      </div>
    );
  }
}

export default App;
