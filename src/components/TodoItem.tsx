// import React from "react";
import { ITask } from "./types";


function TodoItem(props : ITask){ // ada bug di checkBox, kalau di centang, trus dihapus, checkbox nya ke transfer ke task di bawah
    
    return(
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1 items-center cursor-pointer">
                <input type="checkbox" /> 
                <p className="text-slate-700 ml-4 text-[17px]">{props.task}</p>
            </div>
            <button onClick={()=>{props.deleteTodo(props.id)}} className="rounded-full p-1 cursor-pointer bg-red-900 text-white">Delete Task</button>
        </div>
    )
}

export default TodoItem;