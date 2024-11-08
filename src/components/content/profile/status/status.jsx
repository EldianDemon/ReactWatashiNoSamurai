import React, { useState } from 'react'
import p from './../profile.module.css'
const Status = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, editStatus] = useState(props.status)

    return (
        <div className={p.profile__info}>
            {!editMode &&
                <span onDoubleClick={() => {setEditMode(true)}}>{status ? status : '------------'}</span>
            }
            {editMode &&
                <>
                    <input onChange={(e) => { editStatus(e.currentTarget.value)}} type='text' value={status} onBlur={() => setTimeout(() => {setEditMode(false)}, 200)} autoFocus={true} />
                    <button onClick={() => props.applyChanges(status)}>Apply</button>
                </>
            }
        </div>
    )
}

export default Status