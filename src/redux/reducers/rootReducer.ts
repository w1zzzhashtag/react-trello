import {combineReducers} from 'redux'
import dashboardListReducer from './dashboardListReducer'
import sectionsReducer from './sectionsReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    dashboardList: dashboardListReducer,
    sections: sectionsReducer,
    todos: todosReducer
})

export type rootState = ReturnType<typeof rootReducer>

export default rootReducer