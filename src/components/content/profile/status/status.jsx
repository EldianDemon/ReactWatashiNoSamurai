import React from 'react'
import p from './../profile.module.css'
const Status = (props) => {
    return (
        <div className={p.profile__info}>
            {!props.editMode &&
                <span onDoubleClick={() => props.activeEditMode()}>{props.status}</span>
            }
            {props.editMode &&
                <>
                    <input onChange={props.statusChange} type='text' value={props.status} onBlur={() => setTimeout(() => {props.deactiveEditMode()}, 200)} autoFocus={true} />
                    <button onClick={() => props.applyChanges()}>Apply</button>
                </>
            }
        </div>
    )
}

export default Status