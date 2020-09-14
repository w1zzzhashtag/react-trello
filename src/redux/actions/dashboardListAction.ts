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

export type dashboardListActionType = IAddDashboard