import React from 'react';
import classes from '../CSS/NavItems.module.css'
import {NavLink} from 'react-router-dom'

const  NavItems = () => {
    return (
       <ul className={classes.NavItemContainer}>
            <li>
                <NavLink className={classes.NavItem} activeClassName={classes.active} exact to ='/'> Burger Maker </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink  className={classes.NavItem} activeClassName={classes.active} to ='/orders'> Orders </NavLink>
            </li>
       </ul>
    )
}


export default NavItems;