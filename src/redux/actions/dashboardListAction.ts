import {IDashboardPayload} from './../../types/dashboardListTypes'


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

export type dashboardListActionType = IAddDashboard | IRemoveDashboard