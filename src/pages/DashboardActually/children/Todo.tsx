import React from 'react'
import {IStateItems} from './../../../types/todosTypes'

interface Props {
    data: IStateItems
    onToggle: (id: number) => void
    onRemove: (id: number, name: string) => void
}

const Todo:React.FC<Props> = ({data, onRemove, onToggle}) => {
    return (
        <div className="d-act__section-item">
            <label>
                <input 
                    type="checkbox" 
                    checked={data.completed}
                    onChange={() => onToggle(data.id)}
                />
                <span>{data.name}</span>
            </label>
            <i 
                className="material-icons"
                onClick={() => onRemove(data.id, data.name)}
            >delete</i>
        </div>
    )
}

export default Todo
