import React from 'react';
import classes from '../CSS/Layout.module.css'



const  MainBoard= (props) => {
    return (
         <React.Fragment>
        <main className={classes.Container}>
            {props.children}
        </main>
     </React.Fragment>
    )
    }


export default MainBoard;