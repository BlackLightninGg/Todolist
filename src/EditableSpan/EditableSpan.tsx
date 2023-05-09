import React, {ChangeEvent, useState} from "react";

export type EditableSpanPropsType = {
    title: string
    changeTaskTitle: (title:string) => void
}


export const EditableSpan: React.FC<EditableSpanPropsType> = ({ title, changeTaskTitle }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [titleText, setTitleText] = useState<string>(title)
    const onEditMode = () => {
        setEditMode(true)
        setTitleText(title)
    }
    const offEditMode = () => {
        setEditMode(false)
        changeTaskTitle(titleText)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitleText(e.currentTarget.value)
    }
    return editMode
    ?<input value={titleText} autoFocus onBlur={offEditMode} onChange={onChangeHandler}/>
    :<span onDoubleClick={onEditMode}>{title}</span>
}