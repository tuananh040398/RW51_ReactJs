import React, { Component } from 'react'
import Child from './Child';
import List from './List';

export default class NewComponent extends Component {
    constructor() {
        super();
        this.state = {
            count:0,
            valueInput: '',
            list: [
                {id: 1, fullname: "Anh"},
                {id: 2, fullname: "Anh333"},
            ],
        };  
    }

    incre = (value) => {
        this.setState( (prestate) => ({
            count: prestate.count + value,
        }));
      };
    
    handleChange = (e) => {
        this.setState ({
            valueInput: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newData = {
            id: this.state.list.length + 1,
            fullname: this.state.valueInput,
        };
         const newList = [...this.state.list];
         newList.push(newData);

         this.setState({
            list: newList,
            valueInput:"",
         });  
    };

    render() {
        const {count, valueInput} = this.state
        return (
            <div>
                <p>result: {valueInput}</p>
                <Child incre={this.incre}></Child>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    value={valueInput}
                    onChange={this.handleChange}
                    name="valueInput"
                    ></input>
                    <button type='submit'>Gửi</button>
                </form>
                <List list={this.state.list}></List>
            </div>
        );
    }
}
