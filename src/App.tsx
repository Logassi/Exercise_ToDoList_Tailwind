
import TodoListComponent from './components/todolist'
import './App.css'

function App() {
 
  return (
    <div id='container'>
      <h1>Chores ToDo List</h1>
      <div id='todoList'>
        <TodoListComponent task = "Reading"/>
        <TodoListComponent task = "Walking"/>
        <TodoListComponent task = "Sleeping"/>
      </div>
      
      <div id='contentAddTodo'>
          <p>Done Counter : 0 / 0</p>
          <div>
            <p>Add ToDo</p>
            <input type='text'/>
            <button>Add Task</button>
          </div>
      </div>
    </div>
  )
}

export default App
