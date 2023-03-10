import '../App.css';

import React, { Component } from 'react'
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    )
  }
}

export default App;
