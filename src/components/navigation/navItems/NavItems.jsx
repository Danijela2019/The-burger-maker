import React from 'react';
import classes from './NavItems.module.css'
import {NavLink} from 'react-router-dom'

const  NavItems = (props) => {
    return (
       <ul className={classes.NavItemContainer}>
            <li>
                <NavLink className={classes.NavItem} activeClassName={classes.active} exact to ='/'> Home </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink  className={classes.NavItem} activeClassName={classes.active} to ='/burger'> Burger Maker </NavLink>
            </li>
            <li className={classes.NavItem}>
            { props.isAuthenticated ?
                <NavLink  
                    className={classes.NavItem} 
                    activeClassName={classes.active} 
                    to ='/orders'>
                        Orders 
                </NavLink> : null }
            </li>
            <li className={classes.NavItem}>
                { !props.isAuthenticated ?
                    <NavLink 
                        className={classes.NavItem}
                        activeClassName={classes.active}
                        to ='/auth'>
                             Login
                    </NavLink> :
                    <NavLink 
                        className={classes.NavItem}
                        activeClassName={classes.active}
                        to ='/logout'>
                             Logout
                    </NavLink> }
                </li>
        </ul>
    )
}


export default NavItems;