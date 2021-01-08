import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <p className={[classes.Footer, classes.Copyright].join(' ')}>
            {''} The burger maker {(new Date().getFullYear())} {''}|{''} All rights reserved
         </p>
    )
}

export default Footer;

