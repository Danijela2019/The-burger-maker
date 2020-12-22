import React from 'react';
import { connect } from 'react-redux'

import classes from './Layout.module.css'
import Navbar from '../../navigation/navbar/Navbar'

const  Layout= (props) => {
  
    return (
        <React.Fragment>
            <Navbar
            isAuth={props.isAuthenticated}
             />
            <main className={classes.Container}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}


export default connect(mapStateToProps)(Layout);