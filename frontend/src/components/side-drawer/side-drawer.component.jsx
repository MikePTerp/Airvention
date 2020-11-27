import React, {useState} from 'react'
import './side-drawer.style.css'
import {MenuItems} from '../../data/MenuItems'
import {DropdownItems} from '../../data/DropdownItems'
import {NavLink} from 'react-router-dom'

function SideDrawer(props)  {

 const [open, setOpen] = useState(false)

 return (
        <nav className={props.show? 'side-drawer open' : 'side-drawer'}>
            <ul>
                <li><NavLink className="nav-links" exact to="/">Forside</NavLink>
                </li>
                {MenuItems.map((item, index) => {
                if (item.hasChrildren) {
                            return (
                            <li key={index} className="hasChildren">
                                <NavLink className={`${item.cName} child`} exact to={item.url} role="button">
                                {<span>{item.title} {<div className="toggle-submenu">
                                    <i class="fas fa-angle-right" className="fas fa-angle-right icon-sidedrawer" onClick={() => setOpen(!open)}></i> </div>} 
                                    </span>}  
                                </NavLink>
                                
                        <div className={(open)? "sub-wrapper open" : "sub-wrapper"}>
                                <ul className="sub-list">
                                    <li className="go-back" onClick={() => setOpen(!open)}>
                                    <div className="testing"><i class="fas fa-angle-left"></i>
                                    <text className="back-btn-text">Tilbage</text>
                                    </div>
                                   
                                    </li>
                                    <li><text className="heading-sub-menu"  >{item.title}</text></li>
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
        </nav>
    )
}

export default SideDrawer
