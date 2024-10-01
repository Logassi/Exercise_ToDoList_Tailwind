
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
                <p>Add ToDo</p>
                <div className='flex items-center my-3 bg-gray-300 rounded-full'>
                    <input ref={inputRef} type='text' placeholder='Type your Task here' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' />
                    <button onClick={addTodo} className='border-none rounded-full bg-gray-700 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add Task</button>
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
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        <div className='flex items-center mt-7 gap-2'>
            {/* <img className="w-8"/> */}
            <h1 className='text-3xl font-semibold'>Chores ToDo List</h1>   
        </div>

        <div>
            {renderAddTodo()}
        </div>    


        <div>
            {renderTodoList()}
        </div>
    </div>
  )
}

export default TodoList;
