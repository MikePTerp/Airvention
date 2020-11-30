import React from 'react'
import './side-drawer.style.css'
import {MenuItems} from '../../data/MenuItems'

import {NavLink} from 'react-router-dom'
import SideDrawerItem from './side-drawer-item.component'

const SideDrawer = (props) =>  {

 return (
        <nav className={props.show? 'side-drawer open' : 'side-drawer'}>
            <ul>
                <li><NavLink className="nav-links" exact to="/">Forside</NavLink>
                </li>
                {MenuItems.map((item, index) => {
                    return(
                    <SideDrawerItem key={index} item={item}></SideDrawerItem>
                )})
                    }
            </ul>
        </nav>
    )
}

export default SideDrawer
