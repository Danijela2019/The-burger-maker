import React, { useState, useEffect } from 'react';
import classes from  '../CSS/Checkout.module.css'
import RenderedBurger from './RenderedBurger'
import Button from './Button'
import {Route} from 'react-router-dom'
import ContactData from './ContactData'


 const CheckoutSummary = (props) => {
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



const  Checkout = (props) => {
    const[ingredients, setIngredients] = useState({
        bacon: 0,
        cheese: 0, 
        meat: 1, 
        salad:0
    })
    const[price, setPrice] = useState(0)
    
    useEffect (() => {
    const query = new URLSearchParams(props.location.search);
    for( let param of query.entries()) {
      
        if( param[0] === 'price'){
            setPrice(param[1])
        } else {
            ingredients[param[0]] = +param[1]
        }
    }
        setIngredients(ingredients)
    }, [props.location.search,ingredients,setIngredients])

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
            <Route path={props.match.path + '/contact-data'}
             render={(props)=> (<ContactData  ingredients= {ingredients} price={price} {...props}/>)} />
        </div>
    )
}

export default Checkout;