import React, { useState } from 'react';
import classes from  '../CSS/ContactData.module.css'
import Button from './Button'
import axios from '../axios_orders'
import Spinner from './Spinner'

const ContactData = (props) => {
    const[loading, setLoading] = useState(false)
    
    /* const[ contact, setContact ] = useState({
         name: '',
         email: '',
         address: {
             street: '',
             postalCode: ''
         } 
     })*/
    
    const orderHandler = (event) => {
        event.preventDefault()
         //setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: 'Dani Mani',
                address: {
                    street: 'Somestreet 2',
                    zipcode: '1223',
                    country: 'Sweden'
                },
                email:'Dani@mani.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then( response => {
            setLoading(false)
            props.history.push('/')
        })
        .catch(error => {
            setLoading(false)
        })
    }

    let form = (
        <form className={classes.Form} > 
            <input className={classes.FormField} type="text" name='name' placeholder='Full name'/>
            <input className={classes.FormField} type="text" name='email' placeholder='Your email'/>
            <input className={classes.FormField} type="text" name='street' placeholder='Your street and number'/>
            <input className={classes.FormField} type="text" name='postalCode' placeholder='Your postal code'/>
            <Button btnType='Success' clicked={orderHandler}>ORDER</Button>
        </form>
    );
    if( false ) {
        form = <Spinner />
    }
    
    return (
        <div className={classes.ContactData}>
            <p>Please fill in the form:</p>
            {form}   
        </div>
    )
}

 export default ContactData;