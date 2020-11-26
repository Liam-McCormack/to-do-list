import React from 'react'
import './App.css';
import Header from './Header'
import List from './List'

class App extends React.Component {

  state = {
    tasks: [
      {
        title: 'Make an App',
        urgency: 'URGENT',
        status: '🔲'
      },
      {
        title: 'Get Rich',
        urgency: 'IMPORTANT',
        status: '🔲'
      },
      {
        title: 'Move to Spain',
        urgency: 'NOT NECESSARY YET',
        status: '🔲'
      }
    ]
  }

  checkBox = (index) => {
    console.log(this.state.tasks[index].status)
    if (this.state.tasks[index].status === '🔲') {
      this.setState((currentState) => {
        const newTasks = [...currentState.tasks];
        const newState = {
          [newTasks[index]]: '✅'
        }
        console.log(newState)
        return newState
      })
    } else {
      return this.state.tasks[index].status === '🔲'
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List checkBox={this.checkBox}
          items={this.state.tasks} />
      </div>
    );
  }
}


export default App;
