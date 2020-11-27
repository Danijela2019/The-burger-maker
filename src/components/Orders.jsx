import axios from '../axios_orders';
import React, { useState, useEffect } from 'react';
import  classes from'../CSS/Orders.module.css';

const Order = () => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: salad</p>
            <p>Price: 4 SEK</p>
        </div>
    )
}


   

const Orders = (props) => {
    /*const[orders, setOrders] = useState([])
    const[loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get('/orders.json')
        .then((response) => {
            const fetchedOrders=[];
            for( let key in response.data) {
                fetchedOrders.push(
                    { ...response.data[key],
                      id:key 
                    }
                )
            }
        
        setOrders(fetchedOrders)})
        .catch((error) =>{
          console.log(error)})
    }, [orders]); 
 */

    return (
        <div className={classes.OrdersContainer}>
            <Order />
            <Order />
        </div>
    )
}

export default Orders;