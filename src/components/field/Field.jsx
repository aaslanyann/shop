import {TextField} from "@mui/material";
import {useState} from "react";

const Field = ({onChange = () => {},value = "" , ...rest}) => {

    const [text,setText] = useState(value);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setText(value);
        onChange({
            value,
            name
        })
    }

    return <TextField { ...rest } value={text} onChange={handleChange} />
}

export default Field;