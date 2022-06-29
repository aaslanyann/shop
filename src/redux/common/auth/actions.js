import {createAction} from "redux-actions";
import {SET_LOGGEDIN_USER , LOG_OUT} from "../../actionTypes/auth";

export const setLoggedinUser = createAction(SET_LOGGEDIN_USER);
export const setLogOutUser = createAction(LOG_OUT);