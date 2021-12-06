import { createStore, combineReducers } from "redux";
import todo from "../reducers/todo";

/* eslint-disable no-underscore-dangle */
const store = createStore(todo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export type RootState = ReturnType<typeof store.getState>

export default store;
