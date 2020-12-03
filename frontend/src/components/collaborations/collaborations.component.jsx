import React from 'react'
import './collaborations.styles.css'
import ArlaLogo from '../../img/logos/arla-logo.jpg'
import SubHeader from '../sub-header/sub-header.component'

const Collaborations = () => {
    return (
        <section className="collaborations-section">
            <div className="container">
                <SubHeader header="Vi samarbejder med" />
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
