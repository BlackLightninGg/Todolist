import { v1 } from "uuid";
import { TasksStateType } from "../App";

type TasksReducerType = AddTasksACType | RemoveTaskACType | ChangeStatusACType | ChangeTaskTitleACACType

export const tasksReducer = (state: TasksStateType, action: any): TasksStateType => {
    switch (action.type) {
        case "ADD-TASKS": {
            let todolistTasks = state[action.payload.todolistId];
            if (todolistTasks === undefined) {
                return { ...state, [action.payload.todolistId]: [] }
            }
            let task = { id: v1(), title: action.payload.title, isDone: false };
            state[action.payload.todolistId] = [task, ...todolistTasks];

            return { ...state }
        }

        case "REMOVE-TASK": {

            let todolistTasks = state[action.payload.todolistId];
            state[action.payload.todolistId] = todolistTasks.filter(t => t.id !== action.payload.id);

            return { ...state }
        }

        case "CHANGE-STATUS": {
            return { ...state, [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.id ? { ...t, isDone: action.payload.isDone } : t) }
        }

        case "CHANGE-TASKS-TITLE": {
            return { ...state, [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.id ? { ...t, title: action.payload.newTitle } : t) }
        }

        default: {
            return state
        }
    }
}

type AddTasksACType = ReturnType<typeof addTasksAC>

export const addTasksAC = (todolistId: string, title: string) => {
    return {
        type: "ADD-TASKS",
        payload: {
            todolistId,
            title,
        } as const
    }
}


type RemoveTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            id,
            todolistId
        } as const
    }
}

type ChangeStatusACType = ReturnType<typeof changeStatusAC>

export const changeStatusAC = (todolistId: string, id: string, isDone: boolean) => {
    return {
        type: "CHANGE-STATUS",
        payload: {
            todolistId,
            id,
            isDone,
        } as const
    }
}

type ChangeTaskTitleACACType = ReturnType<typeof changeTaskTitleAC>

export const changeTaskTitleAC = (todolistId: string, id: string, newTitle: string) => {
    return {
        type: "CHANGE-TASKS-TITLE",
        payload: {
            todolistId,
            id,
            newTitle
        } as const
    }
}