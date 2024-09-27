// import React from "react";
import { ITask } from "./types";

function deleteButtonHandler(){
    alert("Delete button pressed");
}


function TodoListComponent(props : ITask){
    return(
        <div id='contentToDoList'>
            <input type="checkbox"  /> 
            {props.task}
            <button onClick={deleteButtonHandler}>Delete Task</button>
        </div>
    )
}

export default TodoListComponent;