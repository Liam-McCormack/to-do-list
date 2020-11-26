
import './App.css';
import Header from './Header'
import List from './List'

function App() {
  return (
    <div className="App">
      <Header />
      <List items={tasks} />
    </div>
  );
}

const tasks = [
  {
    title: 'Make an App'
  },
  {
    title: 'Get Rich'
  },
  {
    title: 'Move to Spain'
  }
]

export default App;
