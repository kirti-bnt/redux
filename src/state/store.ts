import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";

export const store=createStore(
    reducers,{},composeWithDevTools(applyMiddleware( thunk))
)
