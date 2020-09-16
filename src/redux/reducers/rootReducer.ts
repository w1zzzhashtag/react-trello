import {combineReducers} from 'redux'
import dashboardListReducer from './dashboardListReducer'


const rootReducer = combineReducers({
    dashboardList: dashboardListReducer,
})

export type rootState = ReturnType<typeof rootReducer>

export default rootReducer