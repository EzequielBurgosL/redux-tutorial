import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './redux'

import MyBox from './MyBox';
import ColorSelector from './ColorSelector';
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
      <Provider store={store}>
        <div className="App">
          <h1>Redux App</h1>
            <MyBox titleColor={titleColor}/>
            <ColorSelector 
              handleClick={this.handleClick}
            />
        </div>
      </Provider>
    );
  }
}

export default App;
