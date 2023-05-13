import React, { Component } from 'react'

export default class viewProps extends Component {
    constructor() {
        super();
        this.state = {
            numberChild: 10,
        };
    }

    increChild = () => {
        this.props.incre(5);
    };

    decreChild = () => {
        this.props.decre(1);
    };
    render() {
        const { } = this.props;
        return (
            <div>
                <button onClick={this.increChild}>Click</button>
                <button onClick={this.decreChild}>Click</button>
            </div>
        );
    }
}
