import React from 'react'
import './collaborations.styles.css'
import SubHeader from '../sub-header/sub-header.component'

const Collaborations = () => {
    return (
        <section className="collaborations-section">
            <div className="container">
                <SubHeader header="Vi samarbejder med" />
                <div className="grid-4 logos">
                    <ul className="collaboration-logos-list">
                        <li>
                            <img src="/img/logos/arla-logo.jpg" alt="logo" />
                        </li>
                        <li>
                            <img src="/img/logos/arla-logo.jpg" alt="logo" />
                        </li>
                        <li>
                            <img src="/img/logos/arla-logo.jpg" alt="logo" />
                        </li>
                        <li>
                            <img src="/img/logos/arla-logo.jpg" alt="logo" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default Collaborations
