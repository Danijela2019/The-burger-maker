import React from 'react';

import classes from './Navbar.module.css';
import Logo from '../../shared/logo/Logo';
import NavItems from '../navItems/NavItems';
import DrawerToggle from '../drawerToggle/DrawerToggle';


const  Navbar= (props) => {
    return (
        <header className={classes.NavbarContainer}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <nav className={classes.DesktopOnly}>
                <NavItems isAuthenticated={props.isAuth} />
            </nav>
            <div className={classes.Logo}>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar;