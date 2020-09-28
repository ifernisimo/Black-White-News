
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import newsReducer from "./reducers/news-reducer";
import { createLogger } from "redux-logger";

let reducers = combineReducers({
    news: newsReducer
});

const logger = createLogger({
    diff: true,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;