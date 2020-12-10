import React from 'react'
import HeroSection from '../../components/hero/hero-section.component'
import Checkmarks from '../../components/checkmarks/checkmarks.component'
import Collaborations from '../../components/collaborations/collaborations.component'
import ContactedSticky from '../../components/get-contacted-sticker/get-contacted-sticker.component'

 const Homepage = () => {
    return (
        
        <div className="main-wrapper">
            <div></div>
        <div className="theMain container "  >
        <HeroSection />
        <Checkmarks />
        <Collaborations />
        </div>
        <div className="theEnd">
        <ContactedSticky></ContactedSticky>
        </div>
        </div>
        
    )
}

export default Homepage