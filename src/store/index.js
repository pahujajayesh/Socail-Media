import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers";

let store;
export function configureStore(){
    store=createStore(reducers,applyMiddleware(thunk,logger));
    return store;
}