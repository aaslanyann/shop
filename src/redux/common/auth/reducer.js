import initialState from "../../initialState";
import { handleActions } from "redux-actions";
import {LOG_OUT, SET_LOGGEDIN_USER, UPDATE_USER_ADDRESS} from "../../actionTypes/auth";
import {localStorageService} from "../../../services/localstorageService";


const initial = initialState.auth;

const reducer = handleActions({
    [SET_LOGGEDIN_USER]: (state,{payload}) => {
        return {
            ...state,
            user:{
                ...payload
            }
        }
    },
    [LOG_OUT]: (state) => {
        localStorageService.clearStorage();
        return {
            ...state,
            user: null
        }
    },
    [UPDATE_USER_ADDRESS]: (state,{payload}) => {
        return {
            ...state,
            user: {
                ...state.user,
                ...payload
            }

        }
    }
}, initial);

export default reducer;