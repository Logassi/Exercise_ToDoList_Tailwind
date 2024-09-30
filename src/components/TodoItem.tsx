// import React from "react";
import { ITask } from "./types";


function TodoItem(props : ITask){
    return(
        <div id='contentToDoList'>
            <input type="checkbox"  /> 
            {props.task}
            <button onClick={()=>{props.deleteTodo(props.id)}}>Delete Task</button>
        </div>
    )
}

export default TodoItem;