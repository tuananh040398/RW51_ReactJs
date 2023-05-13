import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            nameApp: "",
            age: 0,
        };
    }
    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setData(this.state);
    }
    render() {
        return (
        <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <div className='row'>
                    <div className='col-6'>
                        <input
                            type="text" 
                            className='form-control' 
                            placeholder='Name'
                            name='nameApp'
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className='col-6'>
                        <input 
                            type="number" 
                            className='form-control' 
                            placeholder='Age'
                            name='age'
                            onChange={this.handleChange}
                        ></input>
                    </div>
                </div>

                <button type='submit' className="btn btn-primary mt-3">
                    Add
                </button>
            </form>
        </div>
        )
  }
}
