import styles from "./style.module.scss"
import Header from "../header/Header"
import {MAIN_COLOR_BLUE, MAIN_COLOR_CORAL} from "../../constants/colors";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../redux/common/auth/selectors";
import Table from "./table/Table";
import {useCallback, useMemo, useState} from "react";
import CustomBtn from "../shared/customBtn/CustomBtn";
import {userAddressConfig} from "../../config/userPersonalInfo";
import {doc , updateDoc} from "firebase/firestore";
import {db} from "../../FireBase/firebase-config";
import {setUpdateAddress} from "../../redux/common/auth/actions";

export default function MyAcc() {
    const dispatch = useDispatch();
    const [changeFlag, setChangeFlag] = useState(false);
    const user = useSelector(selectUser);
    const {userAddress , userBasicInfo} = user === null ? {} : user;
    const userAddressState = useMemo(() => userAddress,[]);

    const onTableRowChange = useCallback(({name,value}) => {
        userAddressState[name] = value;
    },[])

    const handleChangeAddress = () => {
        const docRef = doc(db, "users", userBasicInfo.email);
        const newDate = {
            userAddress:{...userAddressState}
        }
        updateDoc(docRef, {
            ...newDate
        }).then(() => dispatch(setUpdateAddress(newDate)) )
            .catch(err => console.log(err))
        setChangeFlag(false);
        console.log(userAddressState,'userAddressState');
    };

    const handleCancel = () => {
        setChangeFlag(false);
    }


    return(
        <>
            <Header />
            <div className="containerWithHeader">
                <div className={styles.blockInfo}>
                    <h1 className={styles.title} style={{color:MAIN_COLOR_BLUE}}>My Account</h1>
                    <div className={styles.block}>
                        <div className={styles.basicInfo}>
                            <h1 className={styles.titleSection}>Basic Info</h1>
                            <Table data={userBasicInfo || {}} rows={userBasicInfo ? Object.keys(userBasicInfo) : []} flag={undefined}/>
                        </div>
                        <hr/>
                        <div className={styles.myAddress}>
                            <h1 className={styles.titleSection}>My Address</h1>
                            <Table rows={ Object.keys(userAddressConfig) } fieldsData={userAddressConfig} data={userAddress} flag={changeFlag} onRowChange={onTableRowChange} />
                            {changeFlag ? (
                                <div className={styles.blockForBtn}>
                                    <CustomBtn style={{background: MAIN_COLOR_CORAL, margin: "10px" }} text={"Change"} onClick={handleChangeAddress} />
                                    <CustomBtn style={{background: MAIN_COLOR_CORAL, margin: "10px" }} text={"Cancel"} onClick={handleCancel}/>
                                </div>
                                )
                                :
                                <CustomBtn style={{background: MAIN_COLOR_CORAL, margin: "10px" }} text={"Change Address"} onClick={() => setChangeFlag(true)}/>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
