import React from 'react'
import Sticky from 'react-stickynode'
import './get-contacted-sticker.styles.css'

const ContactedSticky = () => {
    return (
        <Sticky top={50}>
            <div className="contact-container">
        <div className="contact-form">
            <div className="contact-form-header">
            <h2>Bliv kontaktet</h2>
            </div>
            <div className="contactform-body">
            <form>
                <div className="contact-form-control">
                    <input type="text" name="name" placeholder="Navn" required></input>
                </div>
                <div className="contact-form-control">
                    <input type="text" name="company" placeholder="Firma Navn"></input>
                </div>
                <div className="contact-form-control">
                    <input type="email" name="email" placeholder="Email" required></input>
                </div>
                <input type="submit" value="Send" className="btn btn-outline"></input>
            </form>
            </div>
        </div>
        </div>
        </Sticky>
    )
}

export default ContactedSticky



