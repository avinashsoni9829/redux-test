import { COMPLETE_TODO } from "./actionType";

const initialState = {
    todos : [
        {
            id : 1,
            task : "sleep",
            complete : false,
        }
    ]
}

const todosReducer = (state = initialState , action) => {
     switch (action.type){
          case COMPLETE_TODO : return { 
              ...state ,
          }
          default : return state
     }
}

export default todosReducer;
