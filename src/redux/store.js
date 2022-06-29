import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import home from "./common/home/reducer"
import auth from "./common/auth/reducer"
import thunk from "redux-thunk"
import initialState from "./initialState";

const reducer = combineReducers({
    auth,
    home
})

const store = createStore(reducer,initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );


export default store;