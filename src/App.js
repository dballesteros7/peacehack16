import React, {Component} from 'react';
import './App.css';
import BurundiMap from './BurundiMap';
import InfoBar from './InfoBar';
import DataDrop from './DataDrop'
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {

  constructor() {
    super();
    this.state = {
      cityData: []
    };
  }

  onDataReady(data) {
    this.setState({
      cityData: data
    });
  }

  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <AppBar title="PAP Burundi" showMenuIconButton={false}/>
            <InfoBar />
            <BurundiMap cityData={this.state.cityData}/>
            <DataDrop onData={this.onDataReady.bind(this)}/>
          </div>
        </MuiThemeProvider>
    );
  }
}

// setTimeout(() => {
//   DataDrop.getData().then(console.warn)
//   // promise
//   console.warn(DataDrop.getData())
// }, 3000)

export default App;
