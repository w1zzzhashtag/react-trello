import React from 'react'

interface Props {
    openPopup: (val:boolean) => void
}
const CreateDashboard:React.FC<Props> = ({openPopup}) => {
    return (
        <div className="row">
            <h5 className="col s3">Add new dashboard</h5>
            <button 
                className="col btn-floating btn-large waves-effect waves-light red"
                onClick={() => openPopup(true)}
            >
                <i className="material-icons">add</i>
            </button>
        </div>  
    )
}

export default CreateDashboard
