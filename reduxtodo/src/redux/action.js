import { COMPLETE_TODO } from "./actionType";


export const completetodo = (todo) => ({
    type : COMPLETE_TODO,
    payload : todo
});
