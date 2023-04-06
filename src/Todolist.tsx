import React, { useState } from 'react';
import { FilterStatusType } from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    removeTask: (id:number) => void
    tasks:Array<TaskType>
}



export function Todolist(props: PropsType) {

    let [filter, setFilter] = useState<FilterStatusType>('all')

    const changeFilterFoo = () =>{
    
        let tasksForTodoList = props.tasks

        if (filter === 'active') {
            tasksForTodoList = props.tasks.filter(el => !el.isDone)
        }
    
        if (filter === 'completed') {
            tasksForTodoList = props.tasks.filter(el => el.isDone)
        }   
        
        return tasksForTodoList

    }

    

    function changeFilter(status: FilterStatusType) {
        setFilter(status)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>

            {changeFilterFoo().map(el => {

                return (
                    <li key={el.id}><button onClick={() => props.removeTask(el.id)}>✖️</button><input type="checkbox" checked={el.isDone} /><span>{el.title}</span></li>
                )
            })}

        </ul>
        <div>
            <button onClick={()=>changeFilter('all')}>All</button>
            <button onClick={()=>changeFilter('active')}>Active</button>
            <button onClick={()=>changeFilter('completed')}>Completed</button>
        </div>
    </div>
}
