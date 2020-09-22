import { act } from 'react-dom/test-utils'
import {IState} from './../../types/todosTypes'
import {todosActionType} from './../actions/todosActions'


const initialState:IState = {
    items: [
        {id: 1, dashboardId: 1, sectionId: 1, name: 'todo-1', completed: false},
        {id: 2, dashboardId: 1, sectionId: 1, name: 'todo-2', completed: false},
        {id: 3, dashboardId: 1, sectionId: 1, name: 'todo-3', completed: false},
        {id: 4, dashboardId: 1, sectionId: 2, name: 'todo-4', completed: false},
        {id: 5, dashboardId: 1, sectionId: 2, name: 'todo-5', completed: false},
        {id: 6, dashboardId: 1, sectionId: 2, name: 'todo-6', completed: false},
        {id: 7, dashboardId: 1, sectionId: 3, name: 'todo-7', completed: false},
        {id: 8, dashboardId: 1, sectionId: 3, name: 'todo-8', completed: false},
        {id: 9, dashboardId: 1, sectionId: 3, name: 'todo-9', completed: false},
        {id: 10, dashboardId: 2, sectionId: 4, name: 'todo-10', completed: false},
        {id: 11, dashboardId: 2, sectionId: 4, name: 'todo-11', completed: false},
        {id: 12, dashboardId: 2, sectionId: 4, name: 'todo-12', completed: false},
        {id: 13, dashboardId: 2, sectionId: 5, name: 'todo-13', completed: false},
        {id: 14, dashboardId: 2, sectionId: 5, name: 'todo-14', completed: false},
        {id: 15, dashboardId: 2, sectionId: 5, name: 'todo-15', completed: false},
        {id: 16, dashboardId: 2, sectionId: 6, name: 'todo-16', completed: false},
        {id: 17, dashboardId: 2, sectionId: 6, name: 'todo-17', completed: false},
        {id: 18, dashboardId: 2, sectionId: 6, name: 'todo-18', completed: false},
        {id: 19, dashboardId: 3, sectionId: 7, name: 'todo-19', completed: false},
        {id: 20, dashboardId: 3, sectionId: 7, name: 'todo-20', completed: false},
        {id: 21, dashboardId: 3, sectionId: 7, name: 'todo-21', completed: false},
        {id: 22, dashboardId: 3, sectionId: 8, name: 'todo-22', completed: false},
        {id: 23, dashboardId: 3, sectionId: 8, name: 'todo-23', completed: false},
        {id: 24, dashboardId: 3, sectionId: 8, name: 'todo-24', completed: false},
        {id: 25, dashboardId: 3, sectionId: 9, name: 'todo-25', completed: false},
        {id: 26, dashboardId: 3, sectionId: 9, name: 'todo-26', completed: false},
        {id: 27, dashboardId: 3, sectionId: 9, name: 'todo-27', completed: false},
    ]
}

const todosReducer = (state=initialState, action: todosActionType): IState => {
    switch(action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: Math.random() * 10,
                        dashboardId: action.payload.dashboardId,
                        sectionId:  action.payload.sectionId,
                        name:  action.payload.value,
                        completed: false
                    }
                ]
            }
        case 'TOOGLE_COMPLETED_TODO': 
            return {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload) {
                        item.completed = !item.completed
                    }
                    return item
                })
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                items: state.items.filter(item => {
                    if(item.id !== action.payload) {
                        return item
                    }
                })
            }
        default: return state
    }
}   

export default todosReducer