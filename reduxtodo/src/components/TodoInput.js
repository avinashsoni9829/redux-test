import React,{useState} from 'react';
import "./TodoInput.css";



const TodoInput = () => {
    const [todo , setTodo] = useState("");
     
    const handleSubmit = () => {

    };


    return (
        <div>
            <form className="TodoInput" onSubmit={handleSubmit}>

                <input type="text" placeholder="Enter the task"  
                id = "task" name = "task"
                onchange={(e) => setTodo(e.target.value)} ></input>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoInput
