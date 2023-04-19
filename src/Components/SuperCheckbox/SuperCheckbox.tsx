import {ChangeEvent} from "react";

type SuperCheckboxPropsType = {
    checked : boolean
    changeStatusCheckbox:(s:boolean, id:string)=>void
    tasksId:string
}
export const SuperCheckbox = (props:SuperCheckboxPropsType) => {
    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatusCheckbox(e.currentTarget.checked, props.tasksId)
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={onChangeCheckboxHandler} />
    )
}