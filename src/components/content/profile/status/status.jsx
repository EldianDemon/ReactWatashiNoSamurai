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
                    <input type='text' value={props.status} onBlur={() => props.deactiveEditMode()} autoFocus={true} />
                    <button>Apply</button>
                </>
            }
        </div>
    )
}

export default Status