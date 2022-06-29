import {TextField} from "@mui/material";
import {useState} from "react";
import styles from "./style.module.scss";
import CustomBtn from "../../shared/customBtn/CustomBtn";
import {MAIN_COLOR_BLUE} from "../../../constants/colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../../FireBase/firebase-config'
import { useNavigate } from "react-router-dom";
import {setDoc,doc} from "firebase/firestore"
import {HOME_ROUTE} from "../../../constants/routePath";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";
import {setLoggedinUser} from "../../../redux/common/auth/actions"
import {localStorageService} from "../../../services/localstorageService";




export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleBirthdayChange = (e) => setBirthday(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);


    const register = async (e) => {
            e.preventDefault();
            if(checkFields()) {
                try {
                    const user = await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                    navigate(HOME_ROUTE);
                    setUserData();
                } catch (error) {
                    setErr(`Sorry, ${email} is taken.`)
                    console.log(error.message)
                }
            }
    }

    const setUserData = async () => {
        const docRef = doc(db, "users", email);
        const userData = {
            username,
            email,
            birthday,
            id: uuidv4()
        }
        await setDoc(docRef, userData);
        localStorageService.setAccessToken(email)
        dispatch(setLoggedinUser(userData));
    }

    const checkFields = () => checkMail &&
        username.length > 3
        && password.length >= 6 && password === confirmPassword

    return (
        <div>
            <form className={styles.form}  action="">
                <div className={styles.formBlock}>
                    <h1 className={styles.title}>Sign up</h1>
                    <p className={styles.errText}>{err}</p>
                    {( username && username.length < 3) ? (
                        <TextField
                            error
                            className={styles.input}
                            id="outlined-basic" label="Username"
                            variant="outlined" value={username}
                            helperText="Username must have at least 3 characters."
                            onChange={handleUsernameChange} />
                    ) : (
                        <TextField
                            className={styles.input}
                            id="outlined-basic" label="Username"
                            variant="outlined" value={username}
                            onChange={handleUsernameChange} />
                        )
                    }
                    {!email.length || checkMail ? (
                        <TextField
                            className={styles.input}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            type="email"
                            onChange={handleEmailChange}/>
                        ) :
                        (
                            <TextField
                                error
                                className={styles.input}
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                value={email}
                                type="email"
                                helperText="It doesn't look like an email."
                                onChange={handleEmailChange}/>
                            )
                        }

                        <TextField
                            className={styles.input}
                            id="outlined-basic"
                            type="date"
                            variant="outlined"
                            value={birthday}
                            onChange={handleBirthdayChange} />

                        {!password || password.length >= 6 ? (
                        <TextField
                            className={styles.input}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange} />
                        ) : (
                            <TextField
                                error
                                className={styles.input}
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={password}
                                helperText="Password must have at least 6 characters."
                                onChange={handlePasswordChange} />
                        )
                        }
                    {!confirmPassword || password === confirmPassword ? (
                        <TextField
                            className={styles.input}
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPassword} />
                    ) : (
                        <TextField
                            error
                            className={styles.input}
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            value={confirmPassword}
                            helperText="Password and confirm must match."
                            onChange={handleConfirmPassword} />
                    )
                    }
                        <CustomBtn
                            style={{ background: MAIN_COLOR_BLUE, minWidth: 150 }}
                            text="Sign Up"
                            onClick={register} />
                    </div>
                </form>
        </div>
    )
}