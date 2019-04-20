import React, { Component } from 'react'

export default class ColorSelector extends Component {
  render() {
    const { handleClick } = this.props;

    return (
      <div>
        <p onClick={() => handleClick('green')}>turn green!</p>
        <p onClick={() => handleClick('blue')}>turn blue!</p>
      </div>
    )
  }
}
