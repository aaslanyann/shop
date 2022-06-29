import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../FireBase/firebase-config";
import {getSlidePhotos} from "./actions";

export const fetchHomeSliderPhotos = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "homeSlidePhotos"));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        dispatch(getSlidePhotos(data));
    } catch (e) {
        console.log(e.message);
    }
};

