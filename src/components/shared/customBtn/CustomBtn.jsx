import styles from "./style.module.scss"

export default function CustomBtn({style,text,onClick= () => {}, type}) {

    return (
        <button {... {style, onClick, type}} className={styles.btn}>{text}</button>
    )
}