import React from 'react';
 import { BiMenu } from "react-icons/bi";

import classes from './DrawerToggle.module.css';
import Icon from '../../shared/icon/Icon';


const DrawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
       <Icon color='#fdfa66'>
           <BiMenu/>
       </Icon>
    </div>
);

export default DrawerToggle;