import styles from "../style.module.scss"
import { v4 as uuidv4 } from "uuid";
import Field from "../../field/Field"
import Load from "../../shared/loader/Load";


export default function Table({data,rows, flag , fieldsData ,onRowChange = () => {}}) {
        console.log(data)
    return rows.length ?  (
        <table className={styles.table}>
            <tbody>
            {rows?.map((key,idx) =>
                <tr className={styles.line} key={uuidv4()}>
                    <td className={styles.sector}>{key.toUpperCase()}</td>
                        <td className={styles.sectorValue}>
                            {flag ? <Field { ...Object.values(fieldsData)?.[idx]} onChange={onRowChange} value={data?.[key]} /> : data?.[key]}
                        </td>
                </tr>
            )
            }
            </tbody>
        </table>
    ) : null
}