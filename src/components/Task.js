import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.task}</td>
          <td><button>Delete</button></td>
        </tr>
      </div>
    )
  }
}

export default Task;
