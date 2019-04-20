import React, { Component } from 'react';
import MyBox from './MyBox';
import './App.css';

class App extends Component {
  state = {
    titleColor: 'red'
  }

  handleClick = (color) => {
    this.setState({ titleColor: color })
  }

  render() {
    const { titleColor } = this.state;

    return (
      <div className="App">
        <h1>Redux App</h1>
          <MyBox titleColor={titleColor}/>
          <p onClick={() => this.handleClick('green')}>turn green!</p>
          <p onClick={() => this.handleClick('blue')}>turn blue!</p>
      </div>
    );
  }
}

export default App;
