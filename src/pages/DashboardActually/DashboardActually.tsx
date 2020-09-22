import React from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {rootState} from './../../redux/reducers/rootReducer'

import {selectActallyDashboard} from './../../redux/actions/dashboardListAction'
import {toggleCompletedTodo, removeTodo} from './../../redux/actions/todosActions'

import AddTodo from './children/AddTodo'


const DashboardActually = () => {
    const {id}:any = useParams()
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        dispatch(selectActallyDashboard(Number(id)))
    }, [])

    const actuallyDashboard = useSelector((state: rootState) => state.dashboardList.current)
    const sections = useSelector((state: rootState) => state.sections.items)
    const todos = useSelector((state: rootState) => state.todos.items)

    const todoCompletedChange = (id:number) => {
        dispatch(toggleCompletedTodo(id))
    }

    const todoRemoveClick = (id: number, name: string) => {
        if(window.confirm(`You really want remove '${name}'`)) {
            dispatch(removeTodo(id))
        }
        
    }
    
    return (
        <>
            {actuallyDashboard?.map(dashboard => (
                <div key={dashboard.id} className="d-act">
                    <NavLink to="/" exact className="d-act__back-btn col btn-floating btn-large waves-effect waves-light red"><i className="material-icons">navigate_before</i></NavLink>
                     <img 
                        src={dashboard.imageUrl ? dashboard.imageUrl :'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} 
                        alt={dashboard.name}
                        className="d-act__img" /> 
                    <div className="d-act__container">
                        <div className="container">
                            <h1>{dashboard.name}</h1>
                            <p>{dashboard.desc}</p>
                            <div className="d-act__inner">
                                {sections.map(section => {
                                    if(section.dashboardId === dashboard.id) {
                                        return (
                                            <div className="d-act__section" key={section.id}>
                                                <h6 className="d-act__section-title">
                                                    {section.name}
                                                </h6>
                                                {todos.map(todo => {
                                                    if(todo.dashboardId === dashboard.id && todo.sectionId === section.id) {
                                                        return (
                                                            <div className="d-act__section-item" key={todo.id}>
                                                                <label>
                                                                    <input 
                                                                        type="checkbox" 
                                                                        checked={todo.completed}
                                                                        onChange={() => todoCompletedChange(todo.id)}
                                                                    />
                                                                    <span>{todo.name}</span>
                                                                </label>
                                                                <i 
                                                                    className="material-icons"
                                                                    onClick={() => todoRemoveClick(todo.id, todo.name)}
                                                                >delete</i>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                                <AddTodo dashboardId={dashboard.id} sectionId={section.id} />
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DashboardActually
