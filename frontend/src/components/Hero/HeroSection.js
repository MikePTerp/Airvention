import React from 'react'
import { NavLink } from 'react-router-dom'


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container grid">
                <div className="hero-section-text">
            <h1>Hvordan ser din ventilation ud?</h1>
            <p>Med UVC lys installeret i 
                ventilationen sparer du 
                penge og undgår at sprede bakterier, vira og Skimmel</p>
                <NavLink className="btn" exact to="/LearnMore">Læs mere</NavLink>
            </div>

            <div className="hero-form card">
                <h2>Bliv kontaktet</h2>
                <form>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Navn" required></input>
                    </div>
                    <div className="form-control">
                        <input type="text" name="company" placeholder="Firma Navn"></input>
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" required></input>
                    </div>
                    <input type="submit" value="Send" className="btn btn-outline"></input>
                </form>
            </div>
        </div>
        </section>
    )
}

export default HeroSection
