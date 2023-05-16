import { v1 } from "uuid";
import { TasksStateType } from "../App";

type ActionType = AddTasksACType

export const tasksReducer = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case "ADD-TASKS" : {
            let task = {id: v1(), title: action.payload.title, isDone: false};
            let todolistTasks = state[action.payload.todolistId];
            state[action.payload.todolistId] = [task, ...todolistTasks];

            return {...state}
        }

        default: {
            return state
        }
    }
}

type AddTasksACType =ReturnType<typeof addTasksAC>

export const addTasksAC = ( todolistId: string, title: string) => {
    return {
        type: "ADD-TASKS",
        payload: { 
            title,
            todolistId,
         }  as const
    }
}

