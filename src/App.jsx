import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

import Routes from './routes';
import * as actions from './store/actions'
import Home from './pages/home'
import Auth from './pages/auth'


const App = ({onTryAutoSignup,isAuthenticated}) => {

    useEffect(()=> {
        onTryAutoSignup()
    },[onTryAutoSignup])

    let routes = <Routes />
   /* if ( isAuthenticated ) {
        routes = (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" component={Auth} />
                <Redirect to="/" />
            </Switch>
        )
    } */

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