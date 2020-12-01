import React from 'react'
import './collaborations.styles.css'
import ArlaLogo from '../../img/logos/arla-logo.jpg'

 const Collaborations = () => {
    return (
        <section className="collaborations-section">
            <div className="container">
            <div className="sub-header">
                <div className="rectangle" />
                <h3 className="sub-header-text">Vi samarbejder med</h3>
            </div>
            <div className="grid-4 logos">
                <ul className="collaboration-logos-list">
                    <li>
                    <img src={ArlaLogo} alt="logo" />
                    </li>
                    <li>
                    <img src={ArlaLogo} alt="logo" />
                    </li>
                    <li>
                    <img src={ArlaLogo} alt="logo" />
                    </li>
                    <li>
                    <img src={ArlaLogo} alt="logo" />
                    </li>
                </ul>
            </div>
            </div>
        </section>
    )
}


export default Collaborations
