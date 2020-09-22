import React from 'react'
import {useDispatch} from 'react-redux'

import {addTodo} from './../../../redux/actions/todosActions'

interface Props {
    dashboardId: number,
    sectionId: number
}

const AddTodo:React.FC<Props> = ({dashboardId, sectionId}) => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')

    const handleChangeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClickAddTodo = () => {
        if(value) {
            dispatch(addTodo(dashboardId, sectionId, value))
            setValue('')
        }
        
    }    
    return (
        <div className="input-field d-act__add-todo">
            <input type="text" value={value} onChange={handleChangeValue} />
            <button 
                className="waves-effect waves-light btn red d-act__add-todo__btn"
                onClick={handleClickAddTodo}
            >Add</button>
        </div>
    )
}

export default AddTodo
