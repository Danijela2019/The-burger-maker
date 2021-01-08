import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import classes from './Auth.module.css'
import Input from '../../components/shared/input/Input'
import Button from '../../components/shared/button/Button'
import * as actions from '../../store/actions'
import Spinner from '../../components/shared/spinner/Spinner'
import {updateObject} from '../../components/shared/utility/utility'

const  Auth = (props) => {
    const [user, setUser] = useState({
            email: {
                elementType:'input',
                elementConfig : {
                    type:'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true 
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType:'input',
                elementConfig : {
                    type:'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 7,
                },
                valid: false,
                touched: false,
            },
    })
    const [isSignedUp, setIsSignedUp] = useState(true);

    useEffect(() => { 
        if ( props.buildingBurger && props.authRedirectPath !== '/' ) {
            props.onSetAuthRedirectPath()
        }
    },[props])

    const formElementsArray = [];
    for(let key in user) {
        formElementsArray.push({
            id: key,
            config: user[key]
        })
    }

    const validate = (value, rules) => {
        let isValid = true;
        if ( !rules ) {
            return true;
        }
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    const inputChangedHandler = (event, userName) => {
        const updatedUser = updateObject(user, {
            [userName]: updateObject(user[userName], {
                value: event.target.value,
                valid: validate(event.target.value,user[userName].validation),
                touched: true
            })
        })
        setUser(updatedUser);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(user.email.value, user.password.value, isSignedUp)
    }
    const switchAuthModeHandler = () => {
       setIsSignedUp(!isSignedUp)
    }

    let form = formElementsArray.map(formElement => {
        return (
                <Input 
                    key={formElement.id} 
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value} 
                    changed={(event) => inputChangedHandler(event, formElement.id)}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                />
        )
    })
    if(props.loading) {
        form = <Spinner/>
    }

    let errorMessage = null;

    if(props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        )
    }

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath}/>
    }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType='Success'>SUBMIT</Button>
            </form>
            <Button 
                clicked= {switchAuthModeHandler} 
                btnType='Danger'>
                Switch to {isSignedUp ? 'SIGNIN' : 'REGISTER'}
            </Button>
        </div>
    );
   
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignedUp) => dispatch(actions.auth(email, password, isSignedUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/burger'))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Auth);