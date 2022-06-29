import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import styles from "./style.module.scss"
import {localStorageService} from "../../services/localstorageService";
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/common/auth/thunk";
import {Link} from "react-router-dom";
import {HOME_ROUTE, USER_ACCOUNT_ROUTE} from "../../constants/routePath";


export default function BasicMenu() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(false);
    const open = !!anchorEl;
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        dispatch(logOut());
        setAnchorEl(null);
    }



    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <p className={styles.text}>Settings</p>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link to={USER_ACCOUNT_ROUTE}>My account</Link></MenuItem>
                <MenuItem onClick={handleLogOut}><Link to={HOME_ROUTE}>Logout</Link></MenuItem>
            </Menu>
        </>
    );
}