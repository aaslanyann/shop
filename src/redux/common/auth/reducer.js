import initialState from "../../initialState";
import { handleActions } from "redux-actions";
import {LOG_OUT, SET_LOGGEDIN_USER} from "../../actionTypes/auth";
import {localStorageService} from "../../../services/localstorageService";


const initial = initialState.auth;

const reducer = handleActions({
    [SET_LOGGEDIN_USER]: (state,{payload}) => {
        return {
            ...state,
            user: payload
        }
    },
    [LOG_OUT]: (state) => {
        localStorageService.clearStorage();
        return {
            ...state,
            user: null
        }
    }
}, initial);

export default reducer;