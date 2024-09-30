
import { useRef, useState } from 'react'
import TodoItem from './TodoItem'
import { ITask } from './types';

function TodoList() {
    
    // const state = {
    //     todoList : [
    //       "Reading",
    //       "Walking",
    //       "Sleeping",
    //       "Makan Nasi Padang"
    //     ]
    //   }

    const inputRef = useRef<HTMLInputElement>(null);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const addTodo = () => {
        const inputText =  inputRef.current?.value.trim() ;
        // console.log(inputText);

        if(inputText === ""){
            return null;
        }

        const newTodo : ITask = {
            id : Date.now(),
            text : inputText,
            isCompleteCheck : false
        }

        setTodoList((prev) => [...prev, newTodo]);
        
        
        if (inputRef.current) {
            inputRef.current.value = "";
          }
          

    }
    
    const renderAddTodo = () => {
        return (
            <div>
                <p>Done Counter : 0 / 0</p>
                <div>
                    <p>Add ToDo</p>
                    <input ref={inputRef} type='text'/>
                    <button onClick={addTodo}>Add Task</button>
                </div>
            </div>
        )
    }
    
    
    function renderTodoList(){
        return todoList.map((val, index) => {
          return(
            <TodoItem key={index} task = {val.text}/>
          )
        })
      }
    
      
    
    


    return (
    <div>
        <h1>Chores ToDo List</h1>   
      <div id='todoList'>
        {
            renderTodoList()
        }
      </div>
      
      <div id='contentAddTodo'>
        {
            renderAddTodo()
        }
      </div>
    </div>
  )
}

export default TodoList;