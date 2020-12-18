import React from 'react';
import classes from './Layout.module.css'
import Navbar from '../../navigation/navbar/Navbar'

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