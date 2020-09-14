import React from 'react'
import classNames from 'classnames'
import {useDispatch} from 'react-redux'

import {IDashboardPayload} from './../../types/dashboardListTypes'
import {addDashboard} from './../../redux/actions/dashboardListAction'

interface IProps {
    closePopup: (val:boolean) => void
    popupStatus: boolean
}


const DashboardPopup:React.FC<IProps> = ({closePopup, popupStatus}) => {
    const dispatch = useDispatch()
    const [values, setValues] = React.useState<IDashboardPayload>({
        name: '',
        desc: '',
        imageUrl: ''
    })

    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setValues(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        if(values.name.trim() !== '') {
            dispatch(addDashboard(values))
            setValues({
                name: '',
                desc: '',
                imageUrl: ''
            })
        }
        
    }

    return (
        <div className={classNames({
            'dashboard-popup': true,
            'dashboard-popup_active': popupStatus,
        })}>
            <div className="dashboard-popup__inner">
                <p className="dashboard-popup__title">Creating dashboard</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-field dashboard-popup__input">
                        <label htmlFor="name" >Name dashboard</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            onChange={handleOnChange}
                            value={values.name} />
                    </div>
                    <div className="input-field dashboard-popup__input">
                        <label htmlFor="desc" >Description dashboard</label>
                        <input 
                            type="text" 
                            name="desc" 
                            id="desc"
                            onChange={handleOnChange}
                            value={values.desc} />
                    </div>
                    <div className="input-field dashboard-popup__input">
                        <label htmlFor="imageUrl" >Image URL dashboard</label>
                        <input 
                            type="text" 
                            name="imageUrl" 
                            id="imageUrl"
                            onChange={handleOnChange}
                            value={values.imageUrl} />
                    </div>
                    <button className="btn red">Create</button>
                    <i 
                        className="material-icons red-text dashboard-popup__close"
                        onClick={() => closePopup(false)}
                    >close</i>
                </form>
            </div>
        </div>
    )
}

export default DashboardPopup
