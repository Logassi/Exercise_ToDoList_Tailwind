
import { useRef, useState } from 'react'
import TodoItem from './TodoItem'
import { ITask } from './types';

function TodoList() {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const addTodo = () => {
        const inputText : string =  inputRef.current?.value.trim() || "";
        // console.log(inputText);

        if(inputText === ""){
            return null;
        }

        const newTodo : ITask = {
            id : Date.now(),
            task : inputText,
            isCompleteCheck : false,
            deleteTodo : deleteTodo,
            onToggleCompletion : toggleCompletion 
        }

        setTodoList((prev) => [...prev, newTodo]);
        
        
        if (inputRef.current) {
            inputRef.current.value = "";
          }
          

    }

    const deleteTodo = (id : number) => {
        setTodoList((prvTodo) => {
           return prvTodo.filter((todo) => todo.id !== id)
        })
    }

    
    
    const renderAddTodo = () => {
        return (
            <div>
                <p>Done Counter : {todoList.filter(todo => todo.isCompleteCheck).length} / {todoList.length}</p>
                <div>
                    <p>Add ToDo</p>
                    <input ref={inputRef} type='text'/>
                    <button onClick={addTodo}>Add Task</button>
                </div>
            </div>
        )
    }
    
    const toggleCompletion = (id: number) => {
        setTodoList((prevTodo) => {
            return prevTodo.map((todo) =>
                todo.id === id ? { ...todo, isCompleteCheck: !todo.isCompleteCheck } : todo
            );
        });
    };
    
    function renderTodoList(){
        return todoList.map((item, index) => {
          return(
            <TodoItem 
                key={index} 
                task = {item.task} 
                id={item.id} 
                isCompleteCheck={item.isCompleteCheck} 
                deleteTodo={deleteTodo}
                onToggleCompletion={toggleCompletion}
                />
          )
        })
      }
    
    return (
    <div>
        <h1>Chores ToDo List</h1>   
        
        <div id='contentAddTodo'>
            {renderAddTodo()}
        </div>    


        <div id='todoList'>
            {renderTodoList()}
        </div>
    </div>
  )
}

export default TodoList;