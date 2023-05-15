import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: any) => {
    switch (action.type) {
        case "CHANGE-FILTER-TASKS": {
            return action.payload.value
        }

        default: {
            return state
        }

    }
}

export const changeFilterAC = (value:FilterValuesType)=>{
    return {
        type : "CHANGE-FILTER-TASKS",
        payload : {value}
    } as const
}
