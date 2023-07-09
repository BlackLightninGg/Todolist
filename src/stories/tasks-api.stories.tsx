import React, {useEffect, useState} from 'react'
import {tasksAPI} from "../api/tasks-api";
import {v1} from "uuid";

export default {
    title: 'API-Tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todoId = "6f55e53c-c63d-4e72-bfd0-7db06ba81300"

        tasksAPI.getTasks(todoId)
            .then((res) => {
                setState(res.data.items)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "6f55e53c-c63d-4e72-bfd0-7db06ba81300"
        const title = "OOP"
        tasksAPI.createTask(todoId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "6f55e53c-c63d-4e72-bfd0-7db06ba81300"
        const taskId = "d51cf1d2-e3ac-49be-884a-4009023ce6c1"
        tasksAPI.deleteTask(todoId, taskId)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "6f55e53c-c63d-4e72-bfd0-7db06ba81300"
        const taskId = "cdddb0e0-186f-45b8-b819-47de8c752251"
        const newTasks = {
            id: v1(),
            title: "Poleformism",
            description: null,
            startDate: null,
            deadline: null,
            status: 0,
            priority: 1,
            completed: false
        }
        tasksAPI.updateTask(todoId, taskId, newTasks, newTasks.title)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

