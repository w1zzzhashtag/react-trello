import { IState } from './../../types/dashboardListTypes'
import {dashboardListActionType} from './../actions/dashboardListAction'

const initialState: IState = {
    items: [
        { 
            id: 1, 
            name: 'Work week-7', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/1', 
            imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600' 
        },
        { 
            id: 2, 
            name: 'Work week-8', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/2', 
            imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600' },
        { 
            id: 3, 
            name: 'Learn languages', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/3', 
            imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600' },
        { 
            id: 4, 
            name: 'Buy food', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/4', 
            imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600' },
    ],
}

const dashboardListReducer = (state = initialState, action: dashboardListActionType): IState => {
    switch (action.type) {
        case 'ADD_DASHBOARD':
            return {
                items: [
                    ...state.items,
                    {
                        id: state.items.length + 1,
                        url: `/d/${state.items.length + 1}`,
                        ...action.payload
                    }
                ]
                
            }
        default: return state
    }
}

export default dashboardListReducer