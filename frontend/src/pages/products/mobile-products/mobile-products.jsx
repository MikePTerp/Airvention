import React from 'react'
import PageHeader from '../../../components/page-header/page-header.component'
import ContactedSticky from '../../../components/get-contacted-sticker/get-contacted-sticker.component'

 const MobilePath = () => {
    return (
        <div className="main-wrapper">
        <div></div>
        <div className="container">
            <PageHeader title="Kommer snart...." />
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Under konstruktion</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <div className="theEnd">
        <ContactedSticky></ContactedSticky>
        </div>
        </div>
    )
}

export default MobilePath