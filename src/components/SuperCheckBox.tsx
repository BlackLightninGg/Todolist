import Checkbox from '@mui/material/Checkbox';
import React, { ChangeEvent } from "react";

type SuperCheckBoxType = {
    callBack : (e: ChangeEvent<HTMLInputElement>)=> void
    checked: boolean
    color: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default" | undefined
}

export const SuperCheckBox:React.FC<SuperCheckBoxType>= ({callBack, checked, color}) => {
    return (
         <Checkbox onChange={callBack} checked={checked} color={color}/>
    )
} 