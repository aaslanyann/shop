import styles from "../style.module.scss"
import { v4 as uuidv4 } from "uuid";
import {useMemo} from "react";
import Field from "../../field/Field"


export default function Table({data,rows, flag , fieldsData ,onRowChange = () => {}}) {

    return (
        <table className={styles.table}>
            <tbody>
            {rows.map((key,idx) =>
                <tr className={styles.line} key={uuidv4()}>
                    <td className={styles.sector}>{key.toUpperCase()}</td>
                        <td className={styles.sectorValue}>
                            {flag ? <Field { ...Object.values(fieldsData)[idx]} onChange={onRowChange} /> : data[key]}
                        </td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}