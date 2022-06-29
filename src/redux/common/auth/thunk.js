import {setLoggedinUser, setLogOutUser} from "./actions";
import {localStorageService} from "../../../services/localstorageService";



export const loginUser = (data) => async (dispatch) => {
    try {
        localStorageService.setAccessToken(data.email);
        dispatch(setLoggedinUser(data))
    } catch (error) {
        console.log(error.message);
    }
};

export const logOut = () => (dispatch)  => {
    try {
        dispatch(setLogOutUser())
    } catch (err) {
        console.log(err);
    }
}


