import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Backdrop} from "@mui/material";
import {MAIN_COLOR_BLUE} from "../../../constants/colors";

export default function Load() {
    return (
        <Backdrop
            sx={{
                background: "transparent",
                color: MAIN_COLOR_BLUE,
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={true}
        >
            <CircularProgress />
        </Backdrop>
    );
}