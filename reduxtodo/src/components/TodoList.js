import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TransitionGroup as tg } from 'react-transition-group';
import { CSSTransition as ct } from 'react-transition-group';
import { completeTodo } from '../redux/action';
import Todo from './Todo';
import TodoInput from './TodoInput';
import "./TodoList.css";

const TodoList = () => {

    const state = useSelector(state => ({...state.todos}));
    let dispatch = useDispatch();
     return (
        <div className="TodoList">
            <h1>Todo App with React Redux</h1>
            <TodoInput />
            <ul>
                <tg className="todo=list">
                    {
                        state.todos && state.todos.map((todo) => {
                             return(
                                   <ct key = {todo.id} className="todo">
                                      <Todo
                                      key ={todo.id}
                                      id = {todo.id}
                                      task = {todo.task}
                                      completed = {todo.completed}
                                      toggleTodo = {() => dispatch(completeTodo(todo))}
                                      />
                                   </ct>
                             )
                        })
                    }

                
                </tg>
            </ul>
        </div>
    )
}

export default TodoList
