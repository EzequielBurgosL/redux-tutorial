import React, { Component } from 'react'

export default class MyVox extends Component {
  render() {
    return (
      <div style={{ color: this.props.titleColor }}>
        <h2>my box</h2>
      </div>
    )
  }
}
