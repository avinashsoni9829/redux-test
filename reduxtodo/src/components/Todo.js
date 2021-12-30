import React,{useState} from 'react'
import "./Todo.css"
import { TransitionGroup as tg } from 'react-transition-group';
import { CSSTransition as ct } from 'react-transition-group';

const Todo = ({toggleTodo , task , completed ,id}) => {
    return (
        <tg className={completed ? "Todo completed" : "Todo"}>
            <ct key = "normal" timeout = {500} className = "task - text">
                <li className = "Todo-task" onClick={toggleTodo}>
                    {task}
                </li>



            </ct>
        </tg>
    )
}

export default Todo
