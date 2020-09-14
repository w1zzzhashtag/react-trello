import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { rootState } from './../../redux/reducers/rootReducer'

const DashboardList = () => {
    const dashboardList = useSelector(({dashboardList}:rootState) => dashboardList.items)
    
    return (
        <div className="my-row">
            {dashboardList && dashboardList.map(item => (
                <NavLink 
                    key={item.id}
                    to={item.url} 
                    className="mycard" 
                > 
                    <img 
                        className="mycard_img"
                        src={item.imageUrl} 
                        alt={item.name} />
                    <div className="mycard_text">
                        <span className="mycard_text-title">
                            {item.name}
                        </span>
                        <span className="mycard_text-desc">
                            {item.desc}
                        </span>
                    </div>
                </NavLink>
                
            ))}
        </div>
    )
}

export default DashboardList
{/* <div className="card col s3" key={item.id}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={item.imageUrl} />
                    </div>
                    <div className="card-content">
                        <NavLink to={item.url} className="card-title activator grey-text text-darken-4">
                            {item.text}<i className="material-icons right">more_vert</i>
                        </NavLink>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            Card Title<i className="material-icons right">close</i>
                        </span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div> */}