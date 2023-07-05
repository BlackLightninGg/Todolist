import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true
})

export const todolistAPI = {
    getTodoLists() {
        return instance.get("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post("todo-lists", {title})
    },
    deleteTodolist(todoId: string) {
        return instance.delete(`todo-lists/${todoId}`)
    },
    updateTodolistTitle(todoId: string, title: string) {
        return instance.put(`todo-lists/${todoId}`, {title})
    },
}