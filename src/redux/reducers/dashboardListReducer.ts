import { IState } from './../../types/dashboardListTypes'
import {dashboardListActionType} from './../actions/dashboardListAction'

const initialState: IState = {
    items: [
        { 
            id: 1, 
            name: 'Work week-7', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/1', 
            imageUrl: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        { 
            id: 2, 
            name: 'Work week-8', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/2', 
            imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80' 
        },
        { 
            id: 3, 
            name: 'Learn languages languages', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/3', 
            imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80' 
        },
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
        case 'REMOVE_DASHBOARD':
            return {
                items: state.items.filter(item => {
                    if(item.id !== action.payload) {
                        return item
                    }
                })
            }
        default: return state
    }
}

export default dashboardListReducer