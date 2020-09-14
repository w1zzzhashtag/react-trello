import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { rootState } from './../../redux/reducers/rootReducer'

import { ImgTodoPlaceholder } from './../index'

import imgCardMenu from './../../assets/card-menu.png'


const DashboardList = () => {
    const [contextIsOpen, setContextIsOpen] = React.useState(false)
    
    
    const dashboardList = useSelector(({dashboardList}: rootState) => dashboardList.items)
    
    // TODO: Реализовать удаление dashboard при вызове контекстного меню
    const handleContext = () => {
        setContextIsOpen(true)
    }
    

    // FIXME: При клике на меню в карточке происходит лишние ререндоры
    return (
        <div className="my-row">
            {dashboardList && dashboardList.map(item => (
                <div key={item.id} className="mycard" > 
                    <NavLink to={item.url}  className="mycard__img_wrap">
                        { item.imageUrl ? <img 
                            className="mycard__img"
                            src={item.imageUrl}
                            alt={item.name} /> : <ImgTodoPlaceholder/> 
                        }
                    </NavLink>
                    
                    <div className="mycard__text">
                        <NavLink to={item.url} className="mycard__text-title">
                            {item.name.length > 24 ? item.name.substr(0,24) + '...' : item.name}
                        </NavLink>
                        <span className="mycard__text-desc">
                            {item.desc.length > 120 ? item.desc.substr(0,120) + '...' : item.desc}
                        </span>
                    </div>
                    <img 
                        src={imgCardMenu} 
                        alt="card-menu" 
                        className="mycard__menu"
                        onClick={handleContext} />

                    
                    <div className={classNames({
                        'mycard__context red-text': true,
                        'mycard__context_active': contextIsOpen,
                    })} >
                        <p>Delete <span>"{item.name.length > 24 ? item.name.substr(0,24) + '...' : item.name}"</span></p>
                        <i className="material-icons">delete</i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashboardList
