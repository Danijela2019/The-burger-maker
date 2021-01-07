import React, { useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import Routes from './routes';
import * as actions from './store/actions'


const App = ({onTryAutoSignup}) => {

    useEffect(()=> {
        onTryAutoSignup()
    },[onTryAutoSignup])

    let routes = <Routes />
        return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    )
};
   
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);