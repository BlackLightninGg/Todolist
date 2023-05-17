import { FilterValuesType, TodolistType } from "../App";

type TodolistsReducerType = RemoveTodolistACType | AddTodolistACType | ChangeFilterACType | ChangeTodolistTitleACType

export const todolistsReducer = (state: TodolistType[], action: any): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id !== action.payload.id)
        }

        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = { id: action.payload.newTodolistId, title: action.payload.title, filter: 'all' };
            return [newTodolist, ...state]
        }

        case "CHANGE-FILTER": {
            return state.map(tl => tl.id === action.payload.todolistId ? { ...tl, filter: action.payload.value } : tl);
        }

        case "CHANGE-TODOLIST-TITLE": {
            return state.map(tl => tl.id === action.payload.id ? { ...tl, title: action.payload.title } : tl)
        }

        default: {
            return state
        }
    }
}

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: { id }
    } as const
}

type AddTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (newTodolistId: string, title: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {
            newTodolistId,
            title
        } as const
    }
}

type ChangeFilterACType = ReturnType<typeof changeFilterAC>


export const changeFilterAC = (todolistId: string, value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {
            todolistId,
            value
        } as const
    }
}

export type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        payload: {
            id,
            title
        } as const
    }
}