import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ''
    };
  }

  toggleChange = () => {
    //setState using a function, calling the latest prevState 
    this.setState(state => {
      return{
        showChild: !state.showChild
      }
    })
  }

  textChange = () => {
     //setState using a function, calling the latest prevState 
    this.setState(state => ({
      text: state.text + '_hello'
    }))
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

          <button onClick={this.toggleChange}> Toggle Lifecycles </button>
          <button onClick={this.textChange}> Update Text </button>
     
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;