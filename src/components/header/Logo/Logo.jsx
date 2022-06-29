import { Link } from "react-router-dom";
import {HOME_ROUTE} from "../../../constants/routePath";
import logo from "../../../assets/Images/logo.png"
import styles from "./style.module.scss"

const Logo = () => {
    return (
        <>
            <Link to={HOME_ROUTE} className={styles.logoBlock}>
                <img src={logo} alt="logo" className={styles.logo} />
            </Link>
        </>
    )
};

export default Logo;