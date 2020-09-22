


export interface IToggleCompletedTodo {
    type: 'TOOGLE_COMPLETED_TODO',
    payload: number
}
export const toggleCompletedTodo = (id: number): IToggleCompletedTodo => {
    return {
        type: 'TOOGLE_COMPLETED_TODO',
        payload: id
    }
}


export interface IRemoveTodo {
    type: 'REMOVE_TODO'
    payload: number
}
export const removeTodo = (id: number):IRemoveTodo => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
}



export type todosActionType = IToggleCompletedTodo | IRemoveTodo