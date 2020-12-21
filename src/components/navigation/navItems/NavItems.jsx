import React from 'react';
import classes from './NavItems.module.css'
import {NavLink} from 'react-router-dom'

const  NavItems = () => {
    return (
       <ul className={classes.NavItemContainer}>
            <li>
                <NavLink className={classes.NavItem} activeClassName={classes.active} exact to ='/'> Home </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink  className={classes.NavItem} activeClassName={classes.active} to ='/orders'> Orders </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink  className={classes.NavItem} activeClassName={classes.active} to ='/auth'> Login </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink  className={classes.NavItem} activeClassName={classes.active} to ='/burger'> Burger Maker </NavLink>
            </li>
       </ul>
    )
}


export default NavItems;