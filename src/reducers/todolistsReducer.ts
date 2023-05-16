import { v1 } from "uuid";
import { TodolistType } from "../App";

export const todolistsReducer = (state: TodolistType[], action: any) => {
    switch (action.type) {
        case "REMOVE-TODOLIST" : {
            return state.filter(tl => tl.id !== action.payload.id)
        }

        case "ADD-TODOLIST" : {
            let newTodolist: TodolistType = {id: action.payload.newTodolistId, title: action.payload.title, filter: 'all'};
            return [ newTodolist, ...state]
        }

        default: {
            return state
        }
    }
}


export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: { id}
    } as const
}

export const addTodolistAC = (newTodolistId : string, title: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {title,
            newTodolistId
        }
    } as const
}