import React from 'react';
import classes from './Spinner.module.css';


const  Spinner = () => {
    return (
        <div className={classes.LoaderContainer}>
            <div className={classes.Loader} >
                Loading...
            </div>
        </div>
    )
}

export default Spinner;