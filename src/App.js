import React, { Component } from 'react';
import './App.sass';
import Header from './components/Header/Header';
import VisibleBooksList from './containers/VisibleBooks';
import ModalContainer from './containers/ModalContainer';
import Sidebar from './containers/Sidebar';
import Notify from './containers/Notify';

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
        <ModalContainer />
        <Notify />
      </div>
    );
  }
}

export default App;
