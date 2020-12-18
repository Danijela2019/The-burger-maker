import React, { useState } from 'react';

import classes from './Auth.module.css'
import Input from './Input'
import Button from '../../components/shared/button/Button'

const  Auth = () => {
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

    const formElementsArray = [];
    for(let key in user) {
        formElementsArray.push({
            id: key,
            config: user[key]
        })
    }

    const validate = (value, rules) => {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
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
        const updatedUser = {
            ...user,[userName]: {
                ...user[userName],
                value: event.target.value,
                valid: validate(event.target.value,user[userName].validation),
                touched: true
            }
        }
        setUser(updatedUser);
    }

    const form = formElementsArray.map(formElement => {
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

    return (
        <div className={classes.Auth}>
            <form>
                {form}
                <Button btnType='Success'>SUBMIT</Button>
            </form>
        </div>
    )
}

export default Auth;