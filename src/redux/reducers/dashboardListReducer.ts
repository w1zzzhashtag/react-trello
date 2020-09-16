import { IState, IStateItems } from './../../types/dashboardListTypes'
import { dashboardListActionType } from './../actions/dashboardListAction'

const initialState: IState = {
    items: [
        { 
            id: 1, 
            name: 'Work week-7', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/1', 
            imageUrl: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            sections: [
                {id: 1, name: 'Section1', todos: [
                    {id: 1, name: 'todo1', completed: false},
                    {id: 2, name: 'todo2', completed: false},
                    {id: 3, name: 'todo3', completed: false},
                ]},
                {id: 2, name: 'Section2', todos: [
                    {id: 1, name: 'todo1', completed: false},
                    {id: 2, name: 'todo2', completed: false},
                    {id: 3, name: 'todo3', completed: false},
                ]},
            ]
        },
        { 
            id: 2, 
            name: 'Work week-8', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/2', 
            imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80', 
            sections: [
                {id: 1, name: 'Section1', todos: [
                    {id: 1, name: 'todo1', completed: false},
                    {id: 2, name: 'todo2', completed: false},
                    {id: 3, name: 'todo3', completed: false},
                ]},
                {id: 2, name: 'Section2', todos: [
                    {id: 1, name: 'todo1', completed: false},
                    {id: 2, name: 'todo2', completed: false},
                    {id: 3, name: 'todo3', completed: false},
                ]},
            ]
        },
        { 
            id: 3, 
            name: 'Learn languages', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum porro id ea exercitationem quam, suscipit nesciunt perspiciatis sunt nulla.', 
            url: '/d/3', 
            imageUrl: 'https://images.unsplash.com/photo-1520756739397-7d1218d4efea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
            sections: [
                {id: 1, name: 'English', todos: [
                    {id: 1, name: 'grammar', completed: false},
                    {id: 2, name: 'words', completed: false},
                    {id: 3, name: 'read text', completed: false},
                ]},
                {id: 2, name: 'French', todos: [
                    {id: 1, name: 'grammar', completed: false},
                    {id: 2, name: 'words', completed: false},
                    {id: 3, name: 'read text', completed: false},
                ]},
            ]
        },
    ],
    current: null
}

const dashboardListReducer = (state = initialState, action: dashboardListActionType): IState => {
    switch (action.type) {
        case 'ADD_DASHBOARD':
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: state.items.length + 1,
                        url: `/d/${state.items.length + 1}`,
                        sections: [{id: 1, name: 'Enter name', todos: []}],
                        ...action.payload
                    }
                ]
            }
        case 'REMOVE_DASHBOARD':
            return {
                ...state,
                items: state.items.filter(item => {
                    if(item.id !== action.payload) {
                        return item
                    }
                })
            }
        case 'SELECT_ACTUALLY_DASHBOARD': 
            return {
                ...state,
                current: state.items.filter(item => {
                    if(item.id === action.payload) {
                        return item
                    }
                })
            }
        case 'TOOGLE_TODO_COMPLETED':
            return {
                ...state,
                current: state.current?.map(item => {
                    if(item.id === action.payload.itemId) {
                        item.sections.map(section => {
                            if(section.id === action.payload.sectionId) {
                                section.todos.map(todo => {
                                    if(todo.id === action.payload.todoId) {
                                        todo.completed = !todo.completed
                                    }
                                    return todo
                                })
                            }
                            return section
                        })
                    }
                    return item
                })
            }
        default: return state
    }
}

export default dashboardListReducer