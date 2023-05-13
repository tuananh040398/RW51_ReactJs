import React, { Component } from 'react'

export default class TableBody extends Component {
  handleDelete = (id) => {
    this.props.deleteFunc(id);
  }
  render() {
    const { data } = this.props;
    return (
      <>
        <tbody>
            {data.map((item) => {
                return (
                    <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.nameApp}</td>
                    <td>{item.age}</td>
                    <td>
                      <button 
                        type='button' 
                        className='btn btn-warning' 
                        onClick={() => this.handleDelete(item.id)}>
                        Delete
                      </button>
                      <button type='button' className='btn btn-dark'>
                        Edit
                      </button>
                    </td>
                </tr>
                );
                })}
        </tbody>
      </>
    )
  }
}
