import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import '../../stylesheet.css'
import {Button} from '../Button/Button'
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
    state = {open: false}

    handleMenuClick = () => { this.setState((prevState) => {return {open: !this.state.open}})}

    render()
    {
        return(
            <div className="container">
                <div className="main-nav">
                   <NavLink to='/'> <img src="/logo.png" className="logo" alt="Airvention" /></NavLink>
                    <ul className={this.state.open? 'main-menu show' : 'main-menu'}>
                            {MenuItems.map((item, index) => {
                                return (
                                <li key={index}>
                                    <NavLink className={item.cName} exact to={item.url} role="button">
                                        {item.title}    
                                    </NavLink>
                                </li>
                            )})}
                    </ul>
                    <ul className="btn-when-big">
                        <li>
                        <Button className="contact-btn">Kontakt os</Button>
                        </li>
                    </ul>
                    <ul className="main-nav right-menu">
                        <li><a href="tel:25944000">
                        <i className={'fas fa-phone-alt fa-2x'}></i>
                        </a>
                        </li>
                        <li>
                            <a href="mailto:info@airvention.com">
                        <i className={'fas fa-envelope fa-2x'}></i>
                        </a>
                        </li>
                        <li className="ham-menu">
                        <i className={this.state.open ?'fas fa-times fa-2x' : ' fas fa-bars fa-2x'} onClick={this.handleMenuClick}></i>
                        </li>
                    </ul>
                </div>
            </div>
    )
    }
}

export default Navbar