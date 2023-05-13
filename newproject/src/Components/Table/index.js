import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <table className="table">
            <TableHead/>
            <TableBody data={this.props.dataArr} deleteFunc={this.props.handleDelete}/>
        </table>
      </div>
    )
  }
}
