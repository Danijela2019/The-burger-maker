import React from 'react';
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

import classes from  './Checkout.module.css'
import RenderedBurger from '../../components/shared/renderedBurger/RenderedBurger'
import Button from '../../components/shared/button/Button'
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
    const checkoutCancelledHandler = () => {
        props.history.goBack()
    }
    
    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data')
    }

    let summary = <Redirect to='/'/>
    if(props.ings){
        const purchasedRedurect = props.purchased ? <Redirect to='/'/> : null;
        summary = ( 
        <React.Fragment>
            {purchasedRedurect}
            <CheckoutSummary 
                ingredients={props.ings} 
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler}
            />
            <Route
                path={props.match.path + '/contact-data'}
                component={ContactData} 
            />
        </React.Fragment>
        )
    }

    return (
        <div className={classes.CheckoutContainer}>
            {summary}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ings:state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default  connect(mapStateToProps)(Checkout);