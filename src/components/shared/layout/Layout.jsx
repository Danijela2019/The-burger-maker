import React, {useState} from 'react';
import { connect } from 'react-redux'

import classes from './Layout.module.css'
import Navbar from '../../navigation/navbar/Navbar'
import SideDrawer from '../../navigation/sideDrawer/SideDrawer'

const  Layout= (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
   /* const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);*/

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }
  
    return (
        <React.Fragment>
            <Navbar
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleHandler}
             />

            <SideDrawer
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
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