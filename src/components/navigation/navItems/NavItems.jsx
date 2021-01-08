import React from 'react';
import classes from './NavItems.module.css'
import {NavLink} from 'react-router-dom'

const  NavItems = (props) => {
    console.log('NavItems Props', props)
    return (
       <ul className={classes.NavItemContainer}>
            <li onClick={props.closed} className={classes.NavItem}>
                <NavLink className={classes.NavItem} activeClassName={classes.active} exact to ='/'> Home </NavLink>
            </li>
            <li onClick={props.closed} className={classes.NavItem}>
                <NavLink  className={classes.NavItem} activeClassName={classes.active} to ='/burger'> Burger Maker </NavLink>
            </li>
            <li onClick={props.closed} className={classes.NavItem}>
            { props.isAuthenticated ?
                <NavLink  
                    className={classes.NavItem} 
                    activeClassName={classes.active} 
                    to ='/orders'>
                        Orders 
                </NavLink> : null }
            </li>
            <li onClick={props.closed} className={classes.NavItem}>
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