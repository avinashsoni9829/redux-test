import React,{useState} from 'react'
import "./Todo.css"
import { TransitionGroup as tg } from 'react-transition-group';
import { CSSTransition as ct } from 'react-transition-group';

const Todo = ({toggleTodo , task , completed ,id , removeTodo , updateTodo}  ) => {
    const [isEditing , setIsEditing] = useState(false);
    const [editTask , setEditTask] = useState(task);
    
    const handleUpdate = (e) => {
      e.preventDefault();
      updateTodo(id , editTask );
      setEditTask(false);
    }

    return (
      <tg className={completed ? "Todo completed" : "Todo"}>
        {isEditing ? (
          <ct key="editing" timeout={500} className="form">
            <form className="Todo-edit-form"  onSubmit={handleUpdate}>
              <input
                type="text"
                name="task"
                value = {editTask}
                onchange={(e) => setEditTask(e.target.value)}
              ></input>
              <button>save</button>
            </form>
          </ct>
        ) : (
          <ct key="normal" timeout={500} className="task - text">
            <li className="Todo-task" onClick={toggleTodo}>
              {" "}
              {task}{" "}
            </li>
          </ct>
        )}

        <div className="Todo-buttons">
        <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={removeTodo}>Remove</button>
        </div>
      </tg>
    );
}

export default Todo
