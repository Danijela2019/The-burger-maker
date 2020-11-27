import React, { useState, useEffect } from 'react';
import classes from  '../CSS/Checkout.module.css'
import RenderedBurger from './RenderedBurger'
import Button from './Button'
import {Route} from 'react-router-dom'


 const CheckoutSummary = (props) => {
     console.log('Kad se prenese u sledeca komponenta',props.ingredients)
     return (
        <div className={classes.CheckoutSummary}>
            <h1> Thank you for your order</h1>
            <div className={classes.RenderedBurger}>
                <RenderedBurger ingredients={props.ingredients} />
            </div>
            <div className={classes.ButtonGroup}>
                <Button clicked={props.checkoutCancelled} btnType="Danger" >CANCEL</Button>
                <Button clicked={props.checkoutContinued} btnType="Success" >CONTINUE</Button>
            </div>
        </div>
     )
}

const ContactData = () => {
    
    /* const[ contact, setContact ] = useState({
         name: '',
         email: '',
         address: {
             street: '',
             postalCode: ''
         } 
     })*/
     return (
         <div className={classes.ContactData}>
             <p>Please fill in the form:</p>
             <form className={classes.Form} > 
                 <input className={classes.FormField} type="text" name='name' placeholder='Full name'/>
                 <input className={classes.FormField} type="text" name='email' placeholder='Your email'/>
                 <input className={classes.FormField} type="text" name='street' placeholder='Your street and number'/>
                 <input className={classes.FormField} type="text" name='postalCode' placeholder='Your postal code'/>
                 <Button btnType='Success'>ORDER</Button>
 
             </form>
         </div>
 
     )
 
 }

const  Checkout = (props) => {
    const[ingredients, setIngredients] = useState({
        bacon: 0,
        cheese: 0, 
        meat: 1, 
        salad:0
    })
    
    useEffect (() => {
    const query = new URLSearchParams(props.location.search);
    for( let param of query.entries()) {
        ingredients[param[0]] = +param[1]
        }
        console.log('inside useEffect', ingredients)
        setIngredients(ingredients)
    }, [props.location.search,ingredients,setIngredients])

    console.log('Posle use effect ',ingredients)

    const checkoutCancelledHandler = () => {
        props.history.goBack()
    }
    
    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data')
    }
      
    return (
        <div className={classes.CheckoutContainer}>
            <CheckoutSummary 
            ingredients={ingredients} 
            checkoutCancelled={checkoutCancelledHandler}
            checkoutContinued={checkoutContinuedHandler}
            />
            <Route path={props.match.path + '/contact-data'} component={ContactData} />
        </div>
    )
}

export default Checkout;