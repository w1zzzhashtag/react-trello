import {IState} from './../../types/setctionsTypes'
import {sectionsActionType} from './../actions/sectionsAction'

const initialState:IState = {
    items: [
        {id: 1, dashboardId: 1, name: 'Section 1-1'},
        {id: 2, dashboardId: 1, name: 'Section 1-2'},
        {id: 3, dashboardId: 1, name: 'Section 1-3'},
        {id: 4, dashboardId: 2, name: 'Section 2-1'},
        {id: 5, dashboardId: 2, name: 'Section 2-2'},
        {id: 6, dashboardId: 2, name: 'Section 2-3'},
        {id: 7, dashboardId: 3, name: 'Section 3-1'},
        {id: 8, dashboardId: 3, name: 'Section 3-2'},
        {id: 9, dashboardId: 3, name: 'Section 3-3'},
    ]
}

const sectionsReducer = (state=initialState, action:sectionsActionType): IState => {
    switch(action.type) {
        case 'ADD_SECTIONS':
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: Math.random() + 10,
                        dashboardId: action.payload.id,
                        name: action.payload.name
                    }
                ]
            }
        default: return state
    }
}

export default sectionsReducer