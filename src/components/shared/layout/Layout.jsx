import React, {useState} from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Navbar from '../../navigation/navbar/Navbar';
import SideDrawer from '../../navigation/sideDrawer/SideDrawer';
import Footer from '../../shared/footer/Footer';

const  Layout= (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const sideDrawerClosedHandler = () => setShowSideDrawer(false);
    const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);
    
    return (
        <React.Fragment>
            <Navbar
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleHandler}
            closed={sideDrawerClosedHandler}
             />

            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Container}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}


export default connect(mapStateToProps)(Layout);