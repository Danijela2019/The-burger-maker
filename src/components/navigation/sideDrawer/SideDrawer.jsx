import React from 'react';

import NavItems from '../navItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../shared/backdrop/Backdrop'



const SideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <nav>
                <NavItems />
            </nav>
        </div>
        </React.Fragment>
        
    );
};

export default SideDrawer;