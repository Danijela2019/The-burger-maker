import React from 'react';
import classes from './Logo.module.css'
import logo from '../../../assets/logo.png'

const  Logo = () => {
    return (
        <div className={classes.Logo_container}>
            <img className={classes.Logo} src={logo} alt='A burger with text'></img>
        </div>
    )
}

export default Logo;