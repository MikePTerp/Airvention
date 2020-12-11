import React, {useState} from 'react'
import {DropdownItems} from '../../data/DropdownItems'
import {NavLink} from 'react-router-dom'


function SideDrawerItem({item}){

    const [subMenu, setSubMenu] = useState(false)

    const toggleSubmMenu = () => {
    setSubMenu(!subMenu)
    }
    return (
                <li>
                                <NavLink className={`${item.cName} child`} exact to={item.url} role="button">
                                {<>{item.title} {<div className="toggle-submenu"> {item.hasChrildren?
                                    <i className="fas fa-angle-right icon-sidedrawer" onClick={toggleSubmMenu}></i>: null} </div>} 
                                    </>}  
                                </NavLink>
                                
                        <div className={(subMenu)? "sub-wrapper open" : "sub-wrapper"}>
                                <ul className="sub-list">
                                    <li  onClick={toggleSubmMenu}>
                                    <div className="go-back"><i className="fas fa-angle-left"></i>
                                    <div className="back-btn-text">Tilbage</div>
                                    </div>
                                    </li>
                                    <li><div className="heading-sub-menu"  >{item.title}</div></li>
                                    {DropdownItems.map((childItem, childIndex) =>{
                                        if(childItem.parent !== item.title){
                                        }
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

export default SideDrawerItem;