import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

import NavItems from '../navItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../shared/backdrop/Backdrop';
import Icon from '../../shared/icon/Icon';

const SideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Cross} onClick={props.closed}>
                    <Icon color='#fdfa66'>
                        <FaTimesCircle />
                    </Icon>
                </div>
                <nav>
                    <NavItems isAuthenticated={props.isAuth}
                    closed={props.closed} />
                </nav>
            </div>
        </React.Fragment>
        
    );
};

export default SideDrawer;