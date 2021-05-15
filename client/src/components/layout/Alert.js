import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Alert({ msgs, deleteMsg }) {
    return (
        <div className="alerts-wrap">
            {msgs.map((msg, i) => {
                return (<div className="row alert" key={i}>
                    <div className='col-9 col-12-small'>
                        <p>{msg}</p>
                    </div>
                    <div className='col-3 col-12-small'>
                        <div onClick={()=>{deleteMsg(i)}} className="alert-btn"><FontAwesomeIcon icon={faTimes}/></div>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Alert