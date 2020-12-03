import React from 'react'
import './sub-header.styles.css'

 const SubHeader = ({header}) => {
    return (
        <div className="sub-header">
                    <div className="rectangle" />
                    <h3 className="sub-header-text">{header}</h3>
                </div>
    )
}


export default SubHeader