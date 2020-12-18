import React from 'react';
import classes from  './Checkout.module.css'
import RenderedBurger from '../../components/shared/renderedBurger/RenderedBurger'
import Button from '../../components/shared/button/Button'
import {Route} from 'react-router-dom'
import ContactData from './ContactData'
import {connect} from 'react-redux'


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
    const checkoutCancelledHandler = () => {
        props.history.goBack()
    }
    
    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data')
    }
      
    return (
        <div className={classes.CheckoutContainer}>
            <CheckoutSummary 
                ingredients={props.ings} 
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler}
            />
            <Route
                path={props.match.path + '/contact-data'}
                component={ContactData} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ings:state.ingredients
    }
}
    
export default  connect(mapStateToProps)(Checkout);