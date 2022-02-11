import { createStore } from "redux";
import { contactReducers } from "./reducers/contactReducers";

const store  = createStore(contactReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;