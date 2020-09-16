import React from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {selectActallyDashboard} from './../../redux/actions/dashboardListAction'

import {rootState} from './../../redux/reducers/rootReducer'

const DashboardActually = () => {
    const {id}:any = useParams()
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        dispatch(selectActallyDashboard(Number(id)))
    }, [])

    const actuallyDashboard = useSelector((state: rootState) => state.dashboardList.current)
    
    return (
        <>
            {actuallyDashboard?.map(item => (
                <div key={item.id} className="d-act">
                    <img 
                        src={item.imageUrl ? item.imageUrl :'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} 
                        alt={item.name}
                        className="d-act__img" />
                    <div className="d-act__container">
                        <div className="container">
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                            <div className="d-act__inner">
                                {item.sections.map(section => (
                                    <div className="d-act__section" key={section.id}>
                                        <h6 className="d-act__section-title">
                                            {section.name}
                                        </h6>
                                        {section.todos.map(todo => (
                                            <label className="d-act__section-item" key={todo.id}>
                                                <input type="checkbox" />
                                                <span>{todo.name}</span>
                                                <i className="material-icons">delete</i>
                                            </label>
                                        ))}
                                       
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DashboardActually
