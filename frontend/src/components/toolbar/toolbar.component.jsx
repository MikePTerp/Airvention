import React from 'react'
import {MenuItems} from '../../data/MenuItems'
import {DropdownItems} from '../../data/DropdownItems'
import DrawerToggleButton from '../side-drawer/drawer-toggle-button-component'
import './toolbar.style.css'
import {NavLink} from 'react-router-dom'

const Toolbar = props => {

    return (
            <nav className="main-nav">
                <div className="container">
               <NavLink to='/'> <img src="/logo.png" className="logo" alt="Airvention" /></NavLink>
                <ul className='main-menu'>
                {MenuItems.map((item, index) => {
                if (item.hasChrildren) {
                            return (
                            <li key={index}>
                                <NavLink className={`${item.cName} child`} exact to={item.url} role="button">
                                {<>{item.title} {<i class="fas fa-caret-down"></i>} </>}  
                                </NavLink>
                                    <div className="dropdown-wrapper">
                                <ul className="dropdown-list">
                                    {DropdownItems.map((childItem, childIndex) =>{
                                        return(
                                        <li key={childIndex}>
                                            <NavLink className={childItem.cName} exact to={childItem.url}>
                                                <span>{childItem.title}</span>  
                                            </NavLink>
                                        </li>
                                        )
                                    })}
                                </ul>
                                    </div>
                            </li>
                            )
                            }
							else { 
                                return(
                                    <li key={index}>
                                        <NavLink className={item.cName} exact to={item.url} role="button">
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                
                <ul className="when-big">
                    <li>
                    <a href="mailto:info@airvention.com" className="btn">Kontakt os</a>
                    </li>
                </ul>

                <ul className="right-menu">
                    <li><a href="tel:25944000">
                    <i className={'fas fa-phone-alt fa-2x'}></i>
                    </a>
                    </li>
                    <li>
                        <a href="mailto:info@airvention.com">
                    <i className={'fas fa-envelope fa-2x'}></i>
                    </a>
                    </li>
                    <li className="toolbar-toggle-btn when-small">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                    </li>
                </ul>
                </div>
            </nav>
)

}

export default Toolbar
