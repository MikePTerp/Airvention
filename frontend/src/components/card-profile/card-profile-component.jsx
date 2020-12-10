import React from 'react'
import './card-profile.styles.css'

const CardProfile = ({profile}) => {
    return (
        <div className="profile-card-container">
        <div className="profile-card">
            <div className="profile-header">
                <img src={`${profile.image}`} alt=""/>
            </div>
            <div className="profile-card-body">
                <h4>{profile.name}</h4>
                <p>{profile.title}</p>
                <a href={`mailto:${profile.mail}`}>{profile.mail}</a>
                <p>{profile.phone}</p>
            </div>
            </div>
        </div>
    )
}


export default CardProfile