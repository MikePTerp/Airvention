import React from 'react'
import'./page-header.styles.css'

 const PageHeader = ({header}) => {
    return (
        <div className="pageheader container">
                <div className="pageheader-wrapper">
                    <h1 className="pageheader-header">
                        {header}
                    </h1>
            </div>
        </div>
    )
}

export default PageHeader;