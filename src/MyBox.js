import React, { Component } from 'react'
import { connect } from 'react-redux';

class MyVox extends Component {
  render() {
    const { color } = this.props;

    return (
      <div style={{ color }}>
        <h2>my box</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { colorReducer } = state;

  return colorReducer;
}

export default connect(mapStateToProps, {})(MyVox);