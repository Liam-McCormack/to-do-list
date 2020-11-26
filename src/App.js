import React from 'react'
import './App.css';
import Header from './Header'
import AddTask from './AddTask'
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
    if (this.state.tasks[index].status === '🔲') {
      this.setState((currentState) => {
        const newTasks = [...currentState.tasks];
        newTasks[index].status = '✅'
        const newState = {
          tasks: newTasks
        }
        return newState
      })
    } else if (this.state.tasks[index].status === '✅') {
      this.setState((currentState) => {
        const newTasks = [...currentState.tasks];
        newTasks[index].status = '🔲'
        const newState = {
          tasks: newTasks
        }
        return newState
      })
    }
  }

  addTask = (newTask) => {
    this.setState(currentState => {
      const newState = { tasks: [newTask, ...currentState.tasks] }
      return newState
    })
  }

  deleteTask = (index) => {
    this.setState(currentState => {
      const newTasks = [...currentState.tasks];
      newTasks.splice(index, 1)
      const newState = { tasks: newTasks }
      return newState
    })
  }

  render() {

    if (this.state.tasks.length > 0) {
      return (
        <div className="App">
          <Header />
          <AddTask addTask={this.addTask} />
          <List checkBox={this.checkBox}
            items={this.state.tasks}
            deleteTask={this.deleteTask} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <AddTask addTask={this.addTask} />
          <List checkBox={this.checkBox}
            items={this.state.tasks}
            deleteTask={this.deleteTask} />
          <p>Congrats, go play in the park!</p>
          <img src="https://files.slack.com/files-pri/T1VHRHZE2-F01GB2CAJ72/1dsc_4386.jpg" alt="Young person playing with his frisbee" />
        </div>
      )
    }

  }
}


export default App;
