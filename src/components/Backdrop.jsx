import React from 'react';
import classes from '../CSS/Backdrop.module.css'

const Backdrop = (props) => {
    return (
        props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null

    )
}

export default Backdrop;