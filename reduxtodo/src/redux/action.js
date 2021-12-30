import { COMPLETE_TODO } from "./actionType";


export const completeTodo = (todo) => ({
    type : COMPLETE_TODO,
    payload : todo
});
