import {IState} from './../../types/setctionsTypes'


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

const sectionsReducer = (state=initialState, action:any): IState => {
    switch(action.type) {
        default: return state
    }
}

export default sectionsReducer