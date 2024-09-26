

function deleteButtonHandler(){
    alert("Delete button pressed");
}


function TodoListComponent(){
    return(
        <div id='contentToDoList'>
            <input type="checkbox"/> 
            <label>Task</label>
            <button onClick={deleteButtonHandler}>Delete Task</button>
        </div>
    )
}

export default TodoListComponent;