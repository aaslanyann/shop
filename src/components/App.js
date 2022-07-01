import SignUp from "./Auth/SignUp/SignUp";
import SignIn from "./Auth/SignIn/SignIn";
import {
    Routes,
    Route,
} from "react-router-dom";
import {
    HOME_ROUTE,
    SHOP_ROUTE,
    SHOPPING_CART_ROUTE,
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE,
    USER_ACCOUNT_ROUTE
} from "../constants/routePath";
import Home from "./home/Home";
import DrinkStore from "./drinkStore/DrinkStore";
import MyCart from "./myCart/MyCart";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {localStorageService} from "../services/localstorageService";
import {setLoggedinUser} from "../redux/common/auth/actions";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../FireBase/firebase-config";
import Load from "./shared/loader/Load";
import MyAcc from "./myAccount/MyAcc";

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const token = localStorageService.getAccessToken();
  const dispatch = useDispatch();

  useEffect(() => {
      if(token) {
          const requestUserDate = doc(db, "users", token);
          const data = getDoc(requestUserDate).then(doc => {
              dispatch(setLoggedinUser(doc.data()))
          });
      }
      setTimeout(() => setIsLoad(false), 1500)
  },[])
  return (
      ( isLoad ?
          <Load/> :
        <div className="App">
            <Routes>
                <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
                <Route path={SIGN_IN_ROUTE} element={<SignIn />} />
                <Route path={HOME_ROUTE} element={<Home />} />
                <Route path={SHOP_ROUTE} element={<DrinkStore />} />
                <Route path={SHOPPING_CART_ROUTE} element={<MyCart />} />
                <Route path={USER_ACCOUNT_ROUTE} element={<MyAcc />} />
            </Routes>
        </div>
      )
  );
}

export default App;
