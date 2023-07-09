import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true
})

export const tasksAPI = {
    getTasks(todoId: string) {
        return instance.get<{ items: TaskType[] }>(`todo-lists/${todoId}/tasks`)
    },
    createTask(todoId: string, title: string) {
        return instance.post(`todo-lists/${todoId}/tasks`, {title})
    },
    deleteTask(todoId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}/tasks/${taskId}`)
    },
    updateTask(todoId: string, taskId: string, newTask : TaskType , title:string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}/tasks/${taskId}`, {title})
    },
}

type TaskType = {
    id: string
    title: string
    description: null
    startDate: null
    deadline: null
    status: number
    priority: number
    completed: boolean
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}