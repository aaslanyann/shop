import styles from "./style.module.scss"
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoBlock}>
                    <Logo />
                </div>
                <Navbar />
            </div>
        </header>
    )
}