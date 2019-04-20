import React, { Component } from 'react'
import { connect } from 'react-redux';

import { changeColor } from './redux/actions/colorAction'

class ColorSelector extends Component {
  render() {
    const { changeColor } = this.props;

    return (
      <div>
        <p onClick={() => changeColor('green')}>turn green!</p>
        <p onClick={() => changeColor('blue')}>turn blue!</p>
      </div>
    )
  }
}

export default connect(null, { changeColor })(ColorSelector);