import React, { Component } from 'react';

class input extends Component {
    constructor() {
        super();
        this.state = {
            number: 6,
        };
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <div>
                    Id
                    <input type="text" value={number}/>
                    Name
                    <input type="text"/><br/>
                    Age
                    <input type="text"/>
                    Class
                    <input type="text"/>
                </div>
                <div>
                    <button>Add</button>
                    <button>Update</button>
                </div>
            </div>
        );
    }
}

class table extends Component {
    render () {
        return (
            <div style={{ border: "1px solid black"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>className</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tuấn Anh</td>
                        <td>111</td>
                        <td>RW51</td>
                        <td>
                            <button>Delete</button>
                            <button>Edit</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

const demoComponent = { input, table };

export default demoComponent;

