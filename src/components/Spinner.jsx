import React from 'react';
import classes from '../CSS/Spinner.module.css';


const  Spinner = () => {
    return (
        <div className={classes.Loader} >
            Loading...
        </div>
    )
}

export default Spinner;