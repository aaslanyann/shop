import styles from "./style.module.scss"
import { v4 as uuidv4 } from "uuid";


export default function Range({data}) {
    return (
        <div className={styles.rangeBlock}>
            <ul className={styles.rangeList}>
                {data.map(elem => <li key={uuidv4()} className={styles.listItem}><img src={elem} alt="img"/></li>)}
            </ul>
        </div>
    )
}