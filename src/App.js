import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './redux'

import MyBox from './MyBox';
import ColorSelector from './ColorSelector';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Redux App</h1>
            <MyBox/>
            <ColorSelector />
        </div>
      </Provider>
    );
  }
}

export default App;
