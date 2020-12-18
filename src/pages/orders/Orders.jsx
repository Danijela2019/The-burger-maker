import React, { useState, useEffect } from 'react';

import axios from '../../axios_orders';
import Spinner from '../../components/shared/spinner/Spinner';
import  classes from './Orders.module.css';
import Order from './Order';



const Orders = () => {
    const[orders, setOrders] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/orders.json')
        .then((response) => {
            setLoading(false)
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
            setLoading(false)
          console.log(error)})
    }, []); 
 
    let ordersArray = orders.map((order) => {
        return (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
              />
        )
    })

    if(loading) {
       ordersArray = <Spinner />
    }

    return (
        <div className={classes.OrdersContainer}>
            {ordersArray}
        </div>
    )
}

export default Orders;