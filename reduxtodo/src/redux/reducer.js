import { COMPLETE_TODO } from "./actionType";

const initialState = {
    todos : [
        {
            id : 1,
            task : "sleep",
            completed : false,
        }
    ]
}

const todosReducer = (state = initialState , action) => {
     switch (action.type){
          case COMPLETE_TODO :
           const toggleTodos = state.todos.map((t) => t.id === action.payload.id ? ({...action.payload , completed: !action.payload.completed}) : t);

          return { 
              ...state,
              todos : toggleTodos
          }
          default : return state
     }
}

export default todosReducer;
