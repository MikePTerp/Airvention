import React from 'react'
import './side-drawer.style.css'

const DrawerToggleButton = props => {

    return (
        <button className="ham-menu"> 
            <i className={props.open ?'fas fa-times fa-2x' : ' fas fa-bars fa-2x'} onClick={props.click}></i>
            </button>
    )
}

export default DrawerToggleButton
