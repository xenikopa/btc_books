import React, { Component } from 'react';
import './App.sass';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className='main'> 
        <Sidebar />
        <div className='site'>
          <header>
            Header
          </header>
          <main>
            Main
          </main>
        </div>

      </div>
    );
  }
}

export default App;
