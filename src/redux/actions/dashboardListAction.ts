import {IDashboardPayload, IStateItems} from './../../types/dashboardListTypes'


export interface IAddDashboard {
    type: 'ADD_DASHBOARD',
    payload: IDashboardPayload
}
export const addDashboard = (data:IDashboardPayload):IAddDashboard => {
    return {
        type: 'ADD_DASHBOARD',
        payload: data
    }
}


export interface IRemoveDashboard {
    type: 'REMOVE_DASHBOARD'
    payload: number
}
export const removeDashboard = (id:number):IRemoveDashboard => {
    return {
        type: 'REMOVE_DASHBOARD',
        payload: id
    }
}


export interface ISelectActallyDashboard {
    type: 'SELECT_ACTUALLY_DASHBOARD'
    payload: number
}
export const selectActallyDashboard = (id:number):ISelectActallyDashboard => {
    return {
        type: 'SELECT_ACTUALLY_DASHBOARD',
        payload: id
    }
}



export interface IToggleTodoCopleted {
    type: 'TOOGLE_TODO_COMPLETED',
    payload: {
        itemId: number
        sectionId: number
        todoId: number
    }
}
export const ToggleTodoCopleted = (
    itemId: number,
    sectionId: number,
    todoId: number): IToggleTodoCopleted  => {
    return {
        type: 'TOOGLE_TODO_COMPLETED',
        payload: {
            itemId: itemId,
            sectionId: sectionId,
            todoId: todoId,
        }
    }
}


export type dashboardListActionType = 
    IAddDashboard | 
    IRemoveDashboard | 
    ISelectActallyDashboard | 
    IToggleTodoCopleted