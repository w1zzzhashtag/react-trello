import React from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import classNames from 'classnames'

import { IStateItems } from './../../types/dashboardListTypes'
import { removeDashboard } from './../../redux/actions/dashboardListAction'
import { ImgTodoPlaceholder } from './../index'

import imgCardMenu from './../../assets/card-menu.png'


interface IProps {
    data: IStateItems
}

const DashboardList:React.FC<IProps> = ({data}) => {
    const dispatch = useDispatch()
    const [contextIsOpen, setContextIsOpen] = React.useState<boolean>(false)

    const openContext = () => {
        setContextIsOpen(true)
    }
    const closeContext = () => {
        setContextIsOpen(false)
    }
    const onRemoveDashboard = (id:number, name:string) => {
        if(window.confirm(`You really want remove '${name}'?`)) {
            dispatch(removeDashboard(id))
        }
    }
    return (    
        <div className="mycard" > 
            <NavLink to={data.url} className="mycard__img_wrap">
                { data.imageUrl ? 
                    <img className="mycard__img"src={data.imageUrl} alt={data.name} /> : 
                    <ImgTodoPlaceholder/> 
                }
            </NavLink>
            
            <div className="mycard__text">
                <NavLink to={data.url} className="mycard__text-title">
                    {data.name.length > 24 ? 
                        data.name.substr(0,24) + '...' : 
                        data.name
                    }
                </NavLink>
                <span className="mycard__text-desc" onClick={closeContext}>
                    {data.desc.length > 120 ? 
                        data.desc.substr(0,120) + '...' : 
                        data.desc
                    }
                </span>
            </div>
            <img 
                src={imgCardMenu} 
                alt="card-menu" 
                className="mycard__menu"
                onClick={openContext} />

            <div 
                className={classNames({
                    'mycard__context red-text': true,
                    'mycard__context_active': contextIsOpen,
                })} 
                onClick={() => onRemoveDashboard(data.id, data.name)}
            >
                <p>Delete <span>"{data.name.length > 24 ? data.name.substr(0,24) + '...' : data.name}"</span></p>
                <i className="material-icons">delete</i>
            </div>
        </div>

    )
}

export default DashboardList
