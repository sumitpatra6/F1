import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Sidebar from './components/Sidebar'
import SideBarExample from './SideBarExample'
class App extends Component {
  render() {
    return (
      <div className="App" style = {{float : 'left'}}>
        <Header />
        <Sidebar />

        {/* <SideBarExample /> */}
      </div>
    );
  }
}


export default App;
