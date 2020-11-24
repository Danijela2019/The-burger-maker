import React from 'react';
import classes from '../CSS/Navbar.module.css'
import Logo from './Logo'
import NavItems from './NavItems';

const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked}>MENU</div>
    )
}


const  Navbar= (props) => {
    return (
        <header className={classes.Navbar_container}>
            <DrawerToggle clicked={props.toggleDrawerHandler} />
            <nav className={classes.DesktopOnly}>
                <NavItems />
            </nav>
            <div className={classes.Logo}>
                <Logo />
            </div>
          
        </header>
    )
}


export default Navbar;