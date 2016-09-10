import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurundiMap from './BurundiMap';
import DataDrop from './DataDrop'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<InfoBar />*/}
        <BurundiMap />
          <DataDrop/>
      </div>
    );
  }
}

export default App;
