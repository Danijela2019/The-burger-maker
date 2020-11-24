import React from 'react';
import classes from '../CSS/Layout.module.css'
import Navbar from './Navbar'

const  Layout= (props) => {
  
    return (
        <React.Fragment>
            <Navbar />
            <main className={classes.Container}>
                {props.children}
            </main>
        </React.Fragment>
    )
    }


export default Layout;