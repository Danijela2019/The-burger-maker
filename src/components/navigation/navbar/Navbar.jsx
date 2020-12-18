import React from 'react';
import classes from './Navbar.module.css'
import Logo from '../../shared/logo/Logo'
import NavItems from '../navItems/NavItems';


const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked}>MENU</div>
    )
}



const  Navbar= (props) => {
    return (
        <header className={classes.NavbarContainer}>
            <DrawerToggle clicked={props.toggleDrawerHandler} />
            <nav className={classes.DesktopOnly}>
                <NavItems/>
            </nav>
            <div className={classes.Logo}>
                <Logo />
            </div>
          
        </header>
    )
}


export default Navbar;