import React, { Component } from 'react'

export default class Child extends Component {
    handleCount = () => {
        this.props.incre(3);
    }
  render() {
    return (
      <div>
        <button onClick={this.handleCount}>Tăng</button>
      </div>
    )
  }
}
