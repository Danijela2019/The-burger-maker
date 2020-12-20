import React, { useState } from 'react';
import {connect} from 'react-redux';

import classes from  './Checkout.module.css'
import Button from '../../components/shared/button/Button'
import Spinner from '../../components/shared/spinner/Spinner'
import Input from '../auth/Input'
import * as actions from '../../store/actions/index'

const ContactData = (props) => {
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder: 'Your name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        street: {
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder: 'Your address'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        postalCode: {
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder: 'Your postal code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                isNumeric: true
            },
            valid: false,
            touched: false,
          
        },
        country: {
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid:false,
            touched:false
        },
        email:{
            elementType:'input',
            elementConfig : {
                type:'email',
                placeholder: 'Your email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid:false,
            touched:false
        },
        delivery: {
            elementType:'select',
            elementConfig : {
                options: [
                   {value: 'fastest', displayValue: 'Fastest'},
                   {value: 'cheapest', displayValue: 'Cheapest'},
                ]
            },
            value: 'cheapest',
            validation: {}, 
            valid: true
        },

    });
    const[formIsValid, setFormIsValid] = useState(false)

    
    
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
   

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...orderForm}
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]} 
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        updatedFormElement.valid = validate(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        setOrderForm(updatedOrderForm);
        let valid = true;
        for(let inputIdentifier in updatedOrderForm){
            valid=(updatedOrderForm[inputIdentifier].valid && valid);
            setFormIsValid(valid)
            
        }
    }
    const formElementsArray = [];
    for(let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }
 
    const configArray = formElementsArray.map((formElement) => { 
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
    
    const orderHandler = (event) => {
        event.preventDefault()
         const formData = {};
         for (let formElementIdentifier in orderForm){
             formData[formElementIdentifier]=orderForm[formElementIdentifier].value;
         }
        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData
        }
        props.onOrderBurger(order)
       
    }

    let form = (
        <form onSubmit={orderHandler} > 
            {configArray}
            <Button btnType='Success' disabled={!formIsValid}>ORDER</Button>
        </form>
    );
    if( props.loading ) {
        form = <Spinner />
    }
    
    return (
        <div className={classes.ContactData}>
            <p>Please fill in the form:</p>
            {form}   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ContactData);