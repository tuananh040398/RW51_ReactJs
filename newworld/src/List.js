import React, { Component } from 'react'

export default class list extends Component {
  render() {
    const {list} = this.props;
    return (
      <div>
        {list.map((item) =>{
            return (
                <p key={item.id}>
                    Id:{item.id} {item.fullname}
                </p>
            )
        })}
      </div>
    )
  }
}
