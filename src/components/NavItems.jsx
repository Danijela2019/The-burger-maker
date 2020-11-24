import React from 'react';
import classes from '../CSS/NavItems.module.css'

const  NavItems = () => {
    return (
       <ul className={classes.NavItem_container}>
            <li className={classes.NavItem}>
                <a href='/'>Link1 </a>
            </li>
            <li className={classes.NavItem}>
                <a href='/1'>Link2</a>
            </li>
            <li className={classes.NavItem}>
                <a href='/2'>Link3 </a>
            </li>
       </ul>
    )
}


export default NavItems;