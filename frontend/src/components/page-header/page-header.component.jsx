import React from 'react'
import'./page-header.styles.css'

 const PageHeader = ({title}) => {
    return (
        <div className="pageheader container">
                <div className="pageheader-wrapper">
                    <h1 className="pageheader-header">
                        {title}
                    </h1>
            </div>
        </div>
    )
}

export default PageHeader;