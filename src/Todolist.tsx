import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatusCheckbox: (s: boolean, id: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<null | string>(null)


    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('Tittle is required')
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.charCode === 13) {
            addTask();
        }
    }


    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatusCheckbox(e.currentTarget.checked, t.id)
                    }
                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id} className={t.isDone? 'is-done': ''}>
                        <input type="checkbox" checked={t.isDone} onChange={onChangeCheckboxHandler}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler} className={props.filter==='all'? "active-filter": ''}>All</button>
            <button onClick={onActiveClickHandler} className={props.filter==='active'? "active-filter": ''}>Active</button>
            <button onClick={onCompletedClickHandler} className={props.filter==='completed'? "active-filter": ''}>Completed</button>
        </div>
    </div>
}
