import React, { useState } from 'react';
import classes from  '../CSS/Checkout.modules.css'
import RenderedBurger from './RenderedBurger'
import Button from './Button'
import {Route} from 'react-router-dom'


 const CheckoutSummary = (props) => {
     return (
        <div className={classes.CheckoutSummary}>
            <h1> Thank you for your order</h1>
            <div style={{width:'100%', margin:'auto'}}>
                <RenderedBurger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger" >CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success" >CONTINUE</Button>
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
        <div styles={classes.ContactData}>
            <p>Please fill in the form:</p>
            <form> 
                <input type="text" name='name' placeholder='Full name'/>
                <input type="text" name='email' placeholder='Your email'/>
                <input type="text" name='street' placeholder='Your street and number'/>
                <input type="text" name='postalCode' placeholder='Your postal code'/>
                <Button btnType='Success'>ORDER</Button>

            </form>
        </div>

    )

}

const  Checkout = (props) => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for( let param of query.entries()) {
        ingredients[param[0]] = +param[1]
        }
    
    const checkoutCancelledHandler = () => {
        props.history.goBack()
    }
    
    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data')
    }
      
    return (
        <div>
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