import styles from "./style.module.scss"
import {useCallback, useMemo, useState} from "react";
import CustomBtn from "../../shared/customBtn/CustomBtn";
import {MAIN_COLOR_BLUE} from "../../../constants/colors";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../../../FireBase/firebase-config"
import {v4 as uuidv4} from "uuid";
import Field from "../../field/Field";
import {useDispatch} from "react-redux";
import {loginUser} from "../../../redux/common/auth/thunk";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../../constants/routePath";
import {doc, getDoc} from "firebase/firestore";
import {setLoggedinUser} from "../../../redux/common/auth/actions";


export default function SignIn() {
    const [err, setErr] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fieldsData = useMemo(() => {
       return {
           email: {
               style: {width: "300px"},
               name: 'email',
               label: "Email",
               variant: "outlined",
               type: 'email',
               value: ''
           },
           password: {
               style: {width: "300px"},
               label: "Password",
               name: 'password',
               variant: "outlined",
               type: 'password',
               value: ''
           }
       }
    },[]);

    const onFieldsChange = useCallback(({name,value}) => {
        if(fieldsData.hasOwnProperty(name)) {
            fieldsData[name].value = value
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: fieldsData.email.value,
            password: fieldsData.password.value
        }
        // checkAuthParams(data);
        const {email,password} = data;
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then(() => {
            const requestUserDate = doc(db, "users", email);
            const data = getDoc(requestUserDate).then(doc => dispatch(loginUser(doc.data())));
            navigate(HOME_ROUTE)
        }).catch(() => setErr("Wrong login or password"))

    }

    return (
        <div>
            <form className={styles.form} action="" onSubmit={onSubmit}>
                <h1 className={styles.title}>Sign In</h1>
                <p className={styles.errTitle}>{err}</p>
                {
                    Object.values(fieldsData)
                        .map((params) => (
                            <Field key={uuidv4()} { ...params } onChange={onFieldsChange} />)
                        )
                }
                <CustomBtn
                    style={{background: MAIN_COLOR_BLUE, minWidth: "150px"}}
                    text="Sign In"
                    type="submit"
                />
            </form>
        </div>
    )
}