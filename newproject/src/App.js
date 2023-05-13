import React, { Component } from 'react'
import Form from './Form'
import Table from './Components/Table'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataArr: [
        { id: 1, nameApp: "Test", age: 30 },
        { id: 2, nameApp: "test2", age: 20 },
      ]
    }
  }

  setData = (data) => {
    let newData = [...this.state.dataArr];
    newData.push({ id: newData.length + 1, ...data});
    this.setState({
      dataArr: newData, 
    });

    console.log(newData);
  }

  handleDelete = (id) => {
    const index = this.state.dataArr.findIndex((item) => item.id === id);
    console.log(index);
    let newData = [...this.state.dataArr];
    newData.splice(index, 1);
    this.setState({
      dataArr: newData,
    });
  };

  render() {
    const { dataArr } = this.state;
    return (
      <div className='mt-3'>
        <div className='container'>
          <Form setData={this.setData}/>
          <Table dataArr={dataArr} handleDelete={this.handleDelete}/>
        </div>
      </div>
    )
  }
}

