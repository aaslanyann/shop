import initialState from "../../initialState";
import { handleActions } from "redux-actions";
import {LOG_OUT, SET_LOGGEDIN_USER} from "../../actionTypes/auth";
import {GET_SLIDE_PHOTOS} from "../../actionTypes/home";


const initial = initialState.home;

const reducer = handleActions({
    [GET_SLIDE_PHOTOS]: (state,{payload}) => {
        return {
            sliderPhotos: [...payload]
        };
    }
}, initial);

export default reducer;