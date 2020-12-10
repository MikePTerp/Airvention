import React from 'react'
import PageHeader from '../../../components/page-header/page-header.component'
import './contact.styles.css'
import {profiles} from '../../../data/profiles/Profiles'
import CardProfile from '../../../components/card-profile/card-profile-component'


 const Contact = () => {
    return (
        <div className="container">
            <PageHeader title="Kontakt os" />
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Kontakt os</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>Hovedkontor</h2>
                                <p>Knudlundvej 14</p>
                                <p>8653 Them</p>
                                <div className="phone-line"><i className="fas fa-phone"></i><p>40 10 54 68</p></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Mød holdet bag Airvention</h1>
                            </div>
                        </div>
                        <div className="row">
                            {profiles.map((profile, index) =>{
                                return(
                                    <CardProfile key={index} profile={profile} />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact