import React, { Component } from 'react'

class Demo2 extends Component {
    constructor (){
        super();
        this.state = {
            name: "Demo 2 app",
            arr: [1, 2, 3, 4, 5],
            isTrue: true,
            obj: {
                age: "50",
            },
        };
    }
    render() {
        const { age } = this.state.obj;
    return <div>{age}</div>
  }
}

export default Demo2;
