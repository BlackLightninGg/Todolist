import React from "react";

//Initial types for props

type PropsType = {
    track1: string,
    track2?: number  //? mean that may be not coming props
    tasks: Array<TaskType>
}

//initial types for props from arrays

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

//Create HTML

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.track1}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => {
                    return (
                        <li key={el.id}><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}