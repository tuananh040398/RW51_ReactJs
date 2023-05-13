import React, { Component } from "react";

class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Demo2 app",
      arr: [1, 2, 3, 4, 5],
      isTrue: true,
      obj: {
        age: 18,
      },
    };
  }

  render() {
    const { name, arr, isTrue } = this.state;
    const { age } = this.state.obj;
    return (
      <div>
        <p>{name}</p>
        <div>{arr[1]}</div>
      </div>
    );
  }
}

export default Demo2;
