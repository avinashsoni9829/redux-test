import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [];

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));


export default store;
