import React from 'react'
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons'
// redux
import { useSelector } from 'react-redux'
function ProjectsMenu({ projects, setIndex }) {
    // store
    const role = useSelector(state => state.userInfo.role)

    const proMenuToggle = () => {
        document.querySelector('.control').classList.toggle('open')
    }

    const  handleClick= (i) => {
        setIndex(i)
    }

    return (
        <div className="projects-band">
            <div className="control">
                <div className="btn" onClick={proMenuToggle}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
                <h4>projects</h4>
            </div>
            <div className="pro-container">
                <div className='pro-inner'>
                    <hr />
                    {
                        projects && projects.map((pro, i) => (
                            <>
                                <div  key={pro.id} onClick={()=>handleClick(i)}>
                                    <div>{pro.completion}</div>
                                    <div>{pro.title}</div>
                                </div>
                                <hr/>
                            </>
                        ))
                    }
                    { role === 'admin' &&
                        <><div className='form-link' onClick={()=>handleClick(projects.length)}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                            <h3>Add a Project</h3>
                        </div>
                        <hr/></>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsMenu